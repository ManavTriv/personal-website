import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="flex flex-col space-y-3 w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between group"
      >
        <h1 className="font-secondary text-sm sm:text-base md:text-md font-semibold text-indigo-300 tracking-wide group-hover:text-indigo-200 transition-colors duration-300">
          {title}
        </h1>
        <ChevronDown
          className={`w-4 h-4 text-indigo-300 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default CollapsibleSection;
