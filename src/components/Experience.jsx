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

const Experience = () => (
  <CollapsibleSection title="EXPERIENCE">
    <div className="flex flex-col space-y-3 w-full">
      {experiences.map(({ role, company, period, stack }) => (
        <div key={`${role}-${company}`} className="flex flex-col space-y-1">
          <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
            <h2 className="font-secondary text-sm sm:text-base tracking-wide text-stone-800 dark:text-stone-200">
              {role} at{" "}
              <span className="underline underline-offset-4 decoration-accent hover:text-accent cursor-pointer">
                {company}
              </span>
            </h2>
            <p className="font-secondary text-sm sm:text-base tracking-wide text-stone-600 dark:text-stone-300">
              {period}
            </p>
          </div>
          <p className="font-secondary text-xs sm:text-sm tracking-wide text-stone-500 dark:text-stone-400">
            {stack}
          </p>
        </div>
      ))}
    </div>
  </CollapsibleSection>
);

export default Experience;
