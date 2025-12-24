import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useColor } from "../contexts/ColorContext";

const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { color } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
  const hoverColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.8)`;

  return (
    <section className="flex flex-col space-y-3 w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between group"
      >
        <h1
          className="font-secondary text-sm sm:text-base md:text-md font-semibold tracking-wide transition-colors duration-300 ease-out"
          style={{ color: themeColor }}
          onMouseEnter={(e) => {
            e.target.style.color = hoverColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = themeColor;
          }}
        >
          {title}
        </h1>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          style={{ color: themeColor }}
        />
      </button>

      <div
        className={`overflow-hidden transform origin-top transition-all duration-300 ease-out ${
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
