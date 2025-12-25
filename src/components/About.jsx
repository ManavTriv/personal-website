import { Smile } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";
import { useColor } from "../contexts/ColorContext";

const About = () => {
  const { color, theme } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
  const defaultTextColor =
    theme === "dark" ? "rgb(231, 229, 228)" : "rgb(41, 37, 36)";

  return (
    <CollapsibleSection title="ABOUT ME">
      <p
        className="font-secondary text-sm sm:text-base md:text-md tracking-wide"
        style={{ color: defaultTextColor }}
      >
        hi i'm manav and i'm currently a graduate engineer at {""}
        <span
          className="underline underline-offset-4 cursor-pointer"
          style={{
            textDecorationColor: themeColor,
            color: defaultTextColor,
          }}
          onMouseEnter={(e) => {
            e.target.style.color = themeColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = defaultTextColor;
          }}
        >
          ANZ
        </span>
        . I recently completed my degrees in engineering and economics at {""}
        <span
          className="underline underline-offset-4 cursor-pointer"
          style={{
            textDecorationColor: themeColor,
            color: defaultTextColor,
          }}
          onMouseEnter={(e) => {
            e.target.style.color = themeColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = defaultTextColor;
          }}
        >
          the university of queensland
        </span>
        <span
          className="inline-block align-middle ml-1"
          style={{ color: defaultTextColor }}
          onMouseEnter={(e) => {
            e.target.style.color = themeColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = defaultTextColor;
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
