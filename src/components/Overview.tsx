import { Fragment, useState, type MouseEvent } from "react";
import { useTheme } from "../hooks/useTheme";
import Cat from "./Cat";

type NavItem = {
  label: string;
  link: string;
  external?: boolean;
  copy?: string;
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
    copy: "trivedimanav2003@gmail.com",
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
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: MouseEvent<HTMLAnchorElement>, text: string) => {
    if (!navigator.clipboard) return;
    e.preventDefault();
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {
        location.href = `mailto:${text}`;
      },
    );
  };

  return (
    <div className="flex flex-row justify-between items-center gap-4 w-full">
      <div className="flex flex-col gap-1 min-w-0">
        <h1 className="text-sm sm:text-base font-semibold text-accent">
          manav trivedi
        </h1>
        <div className="grid grid-cols-2 w-fit gap-x-3 gap-y-0.5 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1.5">
          {navItems.map(({ label, link, external, copy }, i) => (
            <Fragment key={label}>
              {i > 0 && <Separator />}
              <a
                href={link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={copy ? (e) => copyToClipboard(e, copy) : undefined}
                className="keyword text-xs sm:text-sm text-stone-600 dark:text-stone-300"
              >
                {copy && copied ? "copied" : label}
              </a>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="h-0 flex items-center">
        <Cat asleep={theme === "dark"} onToggle={toggleTheme} />
      </div>
    </div>
  );
};

export default Overview;
