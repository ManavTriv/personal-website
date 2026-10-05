import Section from "./Section";

type Degree = {
  degree: string;
  institution: string;
  period: string;
  focus: string;
};

const education: Degree[] = [
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

const Education = () => (
  <Section title="education">
    <div className="flex flex-col space-y-3 sm:space-y-2 w-full">
      {education.map(({ degree, institution, period, focus }) => (
        <div key={`${degree}-${institution}`} className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h3 className="mb-1 sm:mb-0 text-sm sm:text-base text-stone-800 dark:text-stone-200">
              {degree} at{" "}
              <span className="keyword">
                {institution}
              </span>
            </h3>
            <p className="text-xs sm:text-sm italic sm:not-italic tabular-nums text-stone-500 dark:text-stone-400">
              {period}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
            {focus}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default Education;
