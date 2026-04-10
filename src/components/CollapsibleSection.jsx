import { useState } from "react";

const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="flex flex-col space-y-3 w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between"
      >
        <h1 className="font-secondary text-sm sm:text-base font-semibold tracking-wide text-accent hover:opacity-80">
          {title}
        </h1>
        <span className="text-accent text-lg leading-none font-bold hover:opacity-80">
          {isOpen ? "−" : "+"}
        </span>
      </button>

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
