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
  const { color, randomizeColor, theme, toggleTheme } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
  const stone800 = "rgb(41, 37, 36)";
  const stone200 = "rgb(231, 229, 228)";
  const defaultTextColor = theme === "dark" ? stone200 : stone800;

  const handleIconMouseEnter = (e) => {
    const children = e.currentTarget.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.color = themeColor;
    }
  };

  const handleIconMouseLeave = (e) => {
    const children = e.currentTarget.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.color = defaultTextColor;
    }
  };

  const handleNameMouseEnter = (e) => {
    e.target.style.color = themeColor;
  };

  const handleNameMouseLeave = (e) => {
    e.target.style.color = defaultTextColor;
  };

  const handleButtonMouseEnter = (e) => {
    e.target.style.opacity = "0.8";
  };

  const handleButtonMouseLeave = (e) => {
    e.target.style.opacity = "1";
  };

  const handleButtonTouchStart = (e) => {
    e.target.style.opacity = "0.8";
  };

  const handleButtonTouchEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleButtonTouchCancel = (e) => {
    e.target.style.opacity = "1";
  };

  const handleNameTouchStart = (e) => {
    e.target.style.color = themeColor;
  };

  const handleNameTouchEnd = (e) => {
    e.target.style.color = defaultTextColor;
  };

  const handleNameTouchCancel = (e) => {
    e.target.style.color = defaultTextColor;
  };

  const iconSizeClasses = "w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5";
  const textClasses = "font-secondary tracking-wide cursor-pointer";

  return (
    <div className="flex flex-row justify-between items-start w-full">
      <div className="flex flex-col">
        <p
          className={`${textClasses} text-lg`}
          onMouseEnter={handleNameMouseEnter}
          onMouseLeave={handleNameMouseLeave}
          onTouchStart={handleNameTouchStart}
          onTouchEnd={handleNameTouchEnd}
          onTouchCancel={handleNameTouchCancel}
          style={{ color: defaultTextColor }}
        >
          manav trivedi
        </p>
        <button
          onClick={toggleTheme}
          className="font-secondary text-xs sm:text-sm tracking-wide cursor-pointer text-left"
          style={{ color: themeColor }}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
          onTouchStart={handleButtonTouchStart}
          onTouchEnd={handleButtonTouchEnd}
          onTouchCancel={handleButtonTouchCancel}
        >
          {theme === "dark" ? "light mode" : "dark mode"}
        </button>
        <button
          onClick={randomizeColor}
          className="font-secondary text-xs sm:text-sm tracking-wide cursor-pointer text-left mt-1"
          style={{ color: themeColor }}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
          onTouchStart={handleButtonTouchStart}
          onTouchEnd={handleButtonTouchEnd}
          onTouchCancel={handleButtonTouchCancel}
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
            <p
              className={`${textClasses} text-sm sm:text-base md:text-md`}
              style={{ color: defaultTextColor }}
            >
              {label}
            </p>
            <Icon
              className={`${iconSizeClasses} ${textClasses}`}
              style={{ color: defaultTextColor }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Overview;
