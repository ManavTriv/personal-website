import { useState, type ReactNode } from "react";

type CollapsibleSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

const CollapsibleSection = ({
  title,
  children,
  defaultOpen = true,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="flex flex-col space-y-3 w-full">
      <h2>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between cursor-pointer"
        >
          <span className="font-secondary text-sm sm:text-base font-semibold tracking-wide text-accent hover:opacity-80">
            {title}
          </span>
          <span className="text-accent text-lg leading-none font-bold hover:opacity-80">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h2>

      <div
        className={`overflow-hidden origin-top transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 max-h-[1000px] translate-y-0"
            : "opacity-0 max-h-0 -translate-y-1"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default CollapsibleSection;
