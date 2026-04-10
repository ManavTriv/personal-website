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

const separators = ["//", "*", "---", "~"];

const asciiFrames = [
  `  /\\_/\\
 ( o.o )
  > ^ <  `,
  `  /\\_/\\
 ( -.- )
  > ^ <  `,
  `  /\\_/\\
 ( ^.^ )
  > ^ <  `,
  `  /\\_/\\
 ( o.o )
  > ~ <  `,
];

const Overview = () => {
  const { theme, toggleTheme } = useColor();
  const [frame, setFrame] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((prev) => (prev + 1) % asciiFrames.length);
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center w-full">
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
                  {separators[(i - 1) % separators.length]}
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
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <button
          onClick={toggleTheme}
          className="text-stone-400 dark:text-stone-500 hover:text-accent cursor-pointer"
          aria-label="toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
        <pre className="font-mono text-xs leading-tight text-stone-400 dark:text-stone-500 select-none text-right">
          {asciiFrames[frame]}
        </pre>
      </div>
    </div>
  );
};

export default Overview;
