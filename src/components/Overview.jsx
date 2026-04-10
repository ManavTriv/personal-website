import { useState, useEffect } from "react";
import { Mail, FileText, Linkedin, Github, Sun, Moon } from "lucide-react";
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

const separators = ["//", "*", "---", "~", "//"];

const cat = [
  "   |\\      _,,,---,,_",
  "   /,`.-'`'    -.  ;-;;,_",
  "  |,4-  ) )-,_..;\\ (  `'-'",
  " '---''(_/--'  `-'\\_)",
].join("\n");

const Overview = () => {
  const { theme, toggleTheme } = useColor();
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorVisible((prev) => !prev), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4 sm:gap-0">
      <div className="flex flex-col gap-1">
        <p className="font-secondary text-sm sm:text-base font-semibold tracking-wide text-accent hover:opacity-80 cursor-pointer">
          MANAV{" "}
          <span className="font-mono font-normal text-stone-400 dark:text-stone-500 select-none">
            ~/
          </span>{" "}
          TRIVEDI
          <span className="font-mono font-normal text-stone-400 dark:text-stone-500 select-none">
            {cursorVisible ? "_" : "\u00a0"}
          </span>
        </p>
        <div className="flex flex-row items-center gap-1.5">
          {navItems.map(({ label, icon: Icon, link, target }, i) => (
            <div key={label} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="font-mono text-xs text-stone-400 dark:text-stone-500 select-none">
                  {separators[i - 1]}
                </span>
              )}
              <a
                href={link}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className="text-stone-800 dark:text-stone-200 hover:text-accent"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            </div>
          ))}
          <span className="font-mono text-xs text-stone-400 dark:text-stone-500 select-none">
            {separators[separators.length - 1]}
          </span>
          <button
            onClick={toggleTheme}
            className="text-stone-800 dark:text-stone-200 hover:text-accent cursor-pointer"
            aria-label="toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <pre className="font-mono text-xs leading-tight text-stone-400 dark:text-stone-500 select-none">
        {cat}
      </pre>
    </div>
  );
};

export default Overview;
