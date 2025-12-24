import CollapsibleSection from "./CollapsibleSection";

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
  return (
    <CollapsibleSection title="EXPERIENCE">
      <div className="flex flex-col space-y-3 w-full">
        {experiences.map(({ role, company, period, stack }) => (
          <div key={`${role}-${company}`} className="flex flex-col space-y-1">
            <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
              <h2 className="font-secondary text-sm sm:text-base md:text-md text-stone-800 tracking-wide">
                {role} <span>at </span>
                <span className="underline decoration-indigo-300 underline-offset-4 hover:text-indigo-300 cursor-pointer transition-colors duration-300">
                  {company}
                </span>
              </h2>
              <p className="font-secondary text-sm sm:text-base md:text-md text-stone-600 tracking-wide">
                {period}
              </p>
            </div>
            {stack && (
              <p className="font-secondary text-xs sm:text-sm md:text-base text-stone-400 tracking-wide">
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
