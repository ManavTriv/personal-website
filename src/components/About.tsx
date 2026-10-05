import { Emoji } from "iconoir-react";
import Section from "./Section";

const About = () => (
  <Section title="ABOUT ME">
    <p className="font-secondary text-sm sm:text-base tracking-wide text-stone-800 dark:text-stone-200">
      hi i'm manav and i'm currently a graduate software engineer at{" "}
      <span className="keyword">ANZ</span>. i recently finished my degrees in
      engineering and economics at{" "}
      <span className="keyword">the university of queensland</span>
      <span className="inline-block align-middle ml-1">
        <Emoji className="w-4 h-4" />
      </span>
      .
    </p>
  </Section>
);

export default About;
