import { Fragment } from "react";
import { useTheme } from "../hooks/useTheme";
import Cat from "./Cat";

type NavItem = {
  label: string;
  link: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "linkedin",
    link: "https://au.linkedin.com/in/manav-trivedi-691688296",
    external: true,
  },
  {
    label: "github",
    link: "https://github.com/ManavTriv",
    external: true,
  },
  {
    label: "email",
    link: "mailto:trivedimanav2003@gmail.com",
  },
  {
    label: "resume",
    link: "/resume.pdf",
  },
];

const Separator = () => (
  <span className="hidden sm:inline text-xs text-stone-400 dark:text-stone-500 select-none">
    /
  </span>
);

const Overview = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between items-center gap-4 w-full">
      <div className="flex flex-col gap-1 min-w-0">
        <h1 className="text-sm sm:text-base font-semibold text-accent">
          manav trivedi
        </h1>
        <div className="flex flex-row flex-wrap items-center gap-x-3 sm:gap-x-1.5 gap-y-0.5">
          {navItems.map(({ label, link, external }, i) => (
            <Fragment key={label}>
              {i > 0 && <Separator />}
              <a
                href={link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="keyword text-xs sm:text-sm text-stone-600 dark:text-stone-300"
              >
                {label}
              </a>
            </Fragment>
          ))}
        </div>
      </div>

      <Cat asleep={theme === "dark"} onToggle={toggleTheme} />
    </div>
  );
};

export default Overview;
