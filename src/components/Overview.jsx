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
  { label: "resume", icon: FileText, link: "/resume.pdf", target: "_self" },
];

const Overview = () => {
  const { theme, toggleTheme } = useColor();

  return (
    <div className="flex flex-row justify-between items-start w-full">
      <div className="flex flex-col">
        <p className="font-secondary text-lg tracking-wide text-stone-800 dark:text-stone-200 hover:text-accent cursor-pointer">
          manav trivedi
        </p>
        <button
          onClick={toggleTheme}
          className="font-secondary text-xs sm:text-sm tracking-wide cursor-pointer text-left text-accent hover:opacity-80"
        >
          {theme === "dark" ? "light mode" : "dark mode"}
        </button>
      </div>

      <div className="flex flex-col gap-1 items-end">
        {navItems.map(({ label, icon: Icon, link, target }) => (
          <a
            key={label}
            href={link}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 text-stone-800 dark:text-stone-200 hover:text-accent"
          >
            <p className="font-secondary text-sm sm:text-base tracking-wide">
              {label}
            </p>
            <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Overview;
