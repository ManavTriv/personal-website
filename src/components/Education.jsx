import CollapsibleSection from "./CollapsibleSection";
import { useColor } from "../contexts/ColorContext";

const education = [
  {
    degree: "bachelor of engineering (hons)",
    institution: "the university of queensland",
    period: "feb 2021 to dec 2025",
    focus: "software engineering",
  },
  {
    degree: "bachelor of economics",
    institution: "the university of queensland",
    period: "feb 2021 to dec 2025",
    focus: "international and financial economics",
  },
];

const Education = () => {
  const { color, theme } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
  const defaultTextColor =
    theme === "dark" ? "rgb(231, 229, 228)" : "rgb(41, 37, 36)";

  return (
    <CollapsibleSection title="EDUCATION">
      <div className="flex flex-col space-y-3 w-full">
        {education.map(({ degree, institution, period, focus }) => (
          <div
            key={`${degree}-${institution}`}
            className="flex flex-col space-y-1"
          >
            <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
              <h2
                className="font-secondary text-sm sm:text-base md:text-md tracking-wide"
                style={{ color: defaultTextColor }}
              >
                {degree} <span>at </span>
                <span
                  className="underline underline-offset-4 cursor-pointer"
                  style={{
                    textDecorationColor: themeColor,
                    color: defaultTextColor,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = themeColor;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = defaultTextColor;
                  }}
                >
                  {institution}
                </span>
              </h2>
              <p
                className="font-secondary text-sm sm:text-base md:text-md tracking-wide"
                style={{
                  color:
                    theme === "dark" ? "rgb(214, 211, 209)" : "rgb(87, 83, 78)",
                }}
              >
                {period}
              </p>
            </div>
            <p
              className="font-secondary text-xs sm:text-sm md:text-base tracking-wide"
              style={{
                color:
                  theme === "dark"
                    ? "rgb(168, 162, 158)"
                    : "rgb(120, 113, 108)",
              }}
            >
              {focus}
            </p>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default Education;
