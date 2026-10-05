import Section from "./Section";

type Job = {
  role: string;
  company: string;
  period: string;
  stack: string[];
};

const experiences: Job[] = [
  {
    role: "software engineer",
    company: "ANZ",
    period: "feb 2026 to present",
    stack: [
      "typescript",
      "next.js",
      "gcp",
      "kafka",
      "python",
      "kubernetes",
      "docker",
      "github actions",
    ],
  },
  {
    role: "software engineer intern",
    company: "ANZ",
    period: "nov 2024 to feb 2026",
    stack: [
      "golang",
      "python",
      "gcp",
      "terraform",
      "grafana",
      "docker",
      "codefresh",
    ],
  },
  {
    role: "software engineer",
    company: "QCC",
    period: "sept 2024 to feb 2025",
    stack: [
      "react.js",
      "javascript",
      "python",
    ],
  },
  {
    role: "software engineer intern",
    company: "CMC Global",
    period: "jan 2023 to feb 2023",
    stack: [
      "java",
      "selenium",
    ],
  },
];

const Experience = () => (
  <Section title="EXPERIENCE">
    <div className="flex flex-col space-y-2 w-full">
      {experiences.map(({ role, company, period, stack }) => (
        <div key={`${role}-${company}`} className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h3 className="font-secondary text-sm sm:text-base tracking-wide text-stone-800 dark:text-stone-200">
              {role} at{" "}
              <span className="keyword">
                {company}
              </span>
            </h3>
            <p className="font-secondary text-xs sm:text-sm tracking-wide text-stone-600 dark:text-stone-300">
              {period}
            </p>
          </div>
          <p className="font-secondary text-xs tracking-wide text-stone-500 dark:text-stone-400">
            {stack.join(", ")}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
