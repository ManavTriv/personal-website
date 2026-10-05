import { Fragment } from "react";
import { Github, HalfMoon, Linkedin, Mail, Page, SunLight } from "iconoir-react";
import { useTheme } from "../hooks/useTheme";

type Icon = typeof Github;

type NavItem = {
  label: string;
  icon: Icon;
  link: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "linkedin",
    icon: Linkedin,
    link: "https://au.linkedin.com/in/manav-trivedi-691688296",
    external: true,
  },
  {
    label: "github",
    icon: Github,
    link: "https://github.com/ManavTriv",
    external: true,
  },
  { label: "email", icon: Mail, link: "mailto:trivedimanav2003@gmail.com" },
  { label: "resume", icon: Page, link: "/resume.pdf" },
];

const cat = [
  "   |\\      _,,,---,,_",
  "   /,`.-'`'    -.  ;-;;,_",
  "  |,4-  ) )-,_..;\\ (  `'-'",
  " '---''(_/--'  `-'\\_)",
].join("\n");

const Separator = () => (
  <span className="text-xs text-stone-400 dark:text-stone-500 select-none">
    ·
  </span>
);

const Overview = () => {
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === "dark" ? SunLight : HalfMoon;

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4 sm:gap-0">
      <div className="flex flex-col gap-1">
        <h1 className="font-secondary text-sm sm:text-base font-semibold tracking-wide text-accent hover:opacity-80">
          MANAV TRIVEDI
        </h1>
        <div className="flex flex-row items-center gap-1.5">
          {navItems.map(({ label, icon: NavIcon, link, external }) => (
            <Fragment key={label}>
              <a
                href={link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-stone-800 dark:text-stone-200 hover:text-accent"
              >
                <NavIcon className="w-4 h-4" />
              </a>
              <Separator />
            </Fragment>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="text-stone-800 dark:text-stone-200 hover:text-accent cursor-pointer"
          >
            <ThemeIcon className="w-4 h-4" />
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
