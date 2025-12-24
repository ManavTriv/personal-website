import CollapsibleSection from "./CollapsibleSection";
import { useColor } from "../contexts/ColorContext";

const experiences = [
  {
    role: "graduate engineer",
    company: "ANZ",
    period: "feb 2026 to present",
    stack: "",
  },
  {
    role: "cloud engineer intern",
    company: "ANZ",
    period: "nov 2024 to feb 2026",
    stack: "golang, python, gcp, aws, grafana, terraform, docker, codefresh",
  },
  {
    role: "software engineer",
    company: "QCC",
    period: "sept 2024 to feb 2025",
    stack: "javascript, python, react native, django",
  },
  {
    role: "automation tester intern",
    company: "CMC Global",
    period: "jan 2023 to feb 2023",
    stack: "java, selenium",
  },
];

const Experience = () => {
  const { color, theme } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
  const defaultTextColor =
    theme === "dark" ? "rgb(231, 229, 228)" : "rgb(41, 37, 36)";

  return (
    <CollapsibleSection title="EXPERIENCE">
      <div className="flex flex-col space-y-3 w-full">
        {experiences.map(({ role, company, period, stack }) => (
          <div key={`${role}-${company}`} className="flex flex-col space-y-1">
            <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
              <h2
                className="font-secondary text-sm sm:text-base md:text-md tracking-wide"
                style={{ color: defaultTextColor }}
              >
                {role} <span>at </span>
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
                  {company}
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
            {stack && (
              <p
                className="font-secondary text-xs sm:text-sm md:text-base tracking-wide"
                style={{
                  color:
                    theme === "dark"
                      ? "rgb(168, 162, 158)"
                      : "rgb(120, 113, 108)",
                }}
              >
                {stack}
              </p>
            )}
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default Experience;
