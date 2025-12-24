import { Smile } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";
import { useColor } from "../contexts/ColorContext";

const About = () => {
  const { color } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;

  return (
    <CollapsibleSection title="ABOUT ME">
      <p className="font-secondary text-sm sm:text-base md:text-md text-stone-800 tracking-wide">
        hi i'm manav and i'm currently a graduate engineer at {""}
        <span
          className="underline underline-offset-4 cursor-pointer transition-colors duration-300"
          style={{
            textDecorationColor: themeColor,
          }}
          onMouseEnter={(e) => {
            e.target.style.color = themeColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "";
          }}
        >
          ANZ
        </span>
        . I recently completed my degrees in engineering and economics at {""}
        <span
          className="underline underline-offset-4 cursor-pointer transition-colors duration-300"
          style={{
            textDecorationColor: themeColor,
          }}
          onMouseEnter={(e) => {
            e.target.style.color = themeColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "";
          }}
        >
          the university of queensland
        </span>
        . i have an interest in building meaningful tools and applications, as
        well as ui/ux design
        <span
          className="inline-block align-middle ml-1 text-stone-800 transition-colors duration-300"
          onMouseEnter={(e) => {
            e.target.style.color = themeColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "";
          }}
        >
          <Smile size={16} />
        </span>
        .
      </p>
    </CollapsibleSection>
  );
};

export default About;
