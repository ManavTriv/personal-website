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
  const { color } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;

  return (
    <CollapsibleSection title="EDUCATION">
      <div className="flex flex-col space-y-3 w-full">
        {education.map(({ degree, institution, period, focus }) => (
          <div
            key={`${degree}-${institution}`}
            className="flex flex-col space-y-1"
          >
            <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
              <h2 className="font-secondary text-sm sm:text-base md:text-md text-stone-800 tracking-wide">
                {degree} <span>at </span>
                <span
                  className="underline underline-offset-4 cursor-pointer transition-colors duration-300"
                  style={{
                    textDecorationColor: themeColor,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = themeColor;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "";
                  }}
                >
                  {institution}
                </span>
              </h2>
              <p className="font-secondary text-sm sm:text-base md:text-md text-stone-600 tracking-wide">
                {period}
              </p>
            </div>
            <p className="font-secondary text-xs sm:text-sm md:text-base text-stone-400 tracking-wide">
              {focus}
            </p>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default Education;
