import React from "react";

const experiences = [
  {
    role: "cloud engineer",
    company: "ANZ",
    period: "apr 2025 to present",
    stack: "gcp, terraform, codefresh",
  },
  {
    role: "cloud engineer intern",
    company: "ANZ",
    period: "nov 2024 to apr 2025",
    stack: "golang, python, gcp, aws, grafana, terraform, docker, codefresh",
  },
  {
    role: "software developer",
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
    <div className="flex flex-col space-y-5 w-full">
      <h1 className="font-secondary text-sm sm:text-base md:text-md font-semibold text-indigo-300 tracking-wide">
        EXPERIENCE
      </h1>

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
          <p className="font-secondary text-xs sm:text-sm md:text-base text-stone-400 tracking-wide">
            {stack}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
