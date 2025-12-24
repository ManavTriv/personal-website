import { Smile } from "lucide-react";
import { useColor } from "../contexts/ColorContext";

const Footer = () => {
  const { theme } = useColor();
  const footerTextColor =
    theme === "dark" ? "rgb(168, 162, 158)" : "rgb(120, 113, 108)";

  return (
    <footer className="w-full">
      <p
        className="font-secondary text-[10px] sm:text-xs flex items-center gap-1 tracking-wide"
        style={{ color: footerTextColor }}
      >
        <Smile
          className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]"
          style={{ color: footerTextColor }}
        />
        made using javascript, react and tailwind css
      </p>
    </footer>
  );
};

export default Footer;
