import { Smile } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";

const About = () => (
  <CollapsibleSection title="ABOUT ME">
    <p className="font-secondary text-sm sm:text-base tracking-wide text-stone-800 dark:text-stone-200">
      hi i'm manav and i'm currently a graduate engineer at{" "}
      <span className="underline underline-offset-4 decoration-accent hover:text-accent cursor-pointer">
        ANZ
      </span>
      . I recently completed my degrees in engineering and economics at{" "}
      <span className="underline underline-offset-4 decoration-accent hover:text-accent cursor-pointer">
        the university of queensland
      </span>
      <span className="inline-block align-middle ml-1 hover:text-accent cursor-pointer">
        <Smile size={16} />
      </span>
      .
    </p>
  </CollapsibleSection>
);

export default About;
