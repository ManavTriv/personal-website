import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section className="flex flex-col space-y-3 w-full">
    <h2 className="font-secondary text-sm sm:text-base font-semibold tracking-wide text-accent">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
