import { Mail, FileText, Linkedin, Github } from "lucide-react";
import { useColor } from "../contexts/ColorContext";

const navItems = [
  {
    label: "linkedin",
    icon: Linkedin,
    link: "https://au.linkedin.com/in/manav-trivedi-691688296",
    target: "_blank",
  },
  {
    label: "github",
    icon: Github,
    link: "https://github.com/ManavTriv",
    target: "_blank",
  },
  {
    label: "email",
    icon: Mail,
    link: "mailto:trivedimanav2003@gmail.com",
    target: "_self",
  },
  {
    label: "resume",
    icon: FileText,
    link: "/resume.pdf",
    target: "_self",
  },
];

const Overview = () => {
  const { color, randomizeColor } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
  const stone800 = "rgb(41, 37, 36)";

  const handleIconMouseEnter = (e) => {
    const children = e.currentTarget.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.color = themeColor;
    }
  };

  const handleIconMouseLeave = (e) => {
    const children = e.currentTarget.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.color = stone800;
    }
  };

  const handleNameMouseEnter = (e) => {
    e.target.style.color = themeColor;
  };

  const handleNameMouseLeave = (e) => {
    e.target.style.color = stone800;
  };

  const handleButtonMouseEnter = (e) => {
    e.target.style.opacity = "0.8";
  };

  const handleButtonMouseLeave = (e) => {
    e.target.style.opacity = "1";
  };

  const iconSizeClasses = "w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5";
  const textClasses =
    "font-secondary tracking-wide cursor-pointer text-stone-800 transition-colors duration-300";

  return (
    <div className="flex flex-row justify-between items-start w-full">
      <div className="flex flex-col">
        <p
          className={`${textClasses} text-lg`}
          onMouseEnter={handleNameMouseEnter}
          onMouseLeave={handleNameMouseLeave}
        >
          manav trivedi
        </p>
        <button
          onClick={randomizeColor}
          className="font-secondary text-xs sm:text-sm tracking-wide cursor-pointer transition-colors duration-300 text-left mt-1"
          style={{ color: themeColor }}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          randomise colour
        </button>
      </div>

      <div className="flex flex-col gap-1 items-end text-right">
        {navItems.map(({ label, icon: Icon, link, target }) => (
          <a
            key={label}
            href={link}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 group"
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}
          >
            <p className={`${textClasses} text-sm sm:text-base md:text-md`}>
              {label}
            </p>
            <Icon className={`${iconSizeClasses} ${textClasses}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Overview;
