import CollapsibleSection from "./CollapsibleSection";

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

const Education = () => (
  <CollapsibleSection title="EDUCATION">
    <div className="flex flex-col space-y-3 w-full">
      {education.map(({ degree, institution, period, focus }) => (
        <div
          key={`${degree}-${institution}`}
          className="flex flex-col space-y-1"
        >
          <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
            <h2 className="font-secondary text-sm sm:text-base tracking-wide text-stone-800 dark:text-stone-200">
              {degree} at{" "}
              <span className="underline underline-offset-4 decoration-accent hover:text-accent cursor-pointer">
                {institution}
              </span>
            </h2>
            <p className="font-secondary text-sm sm:text-base tracking-wide text-stone-600 dark:text-stone-300">
              {period}
            </p>
          </div>
          <p className="font-secondary text-xs sm:text-sm tracking-wide text-stone-500 dark:text-stone-400">
            {focus}
          </p>
        </div>
      ))}
    </div>
  </CollapsibleSection>
);

export default Education;
