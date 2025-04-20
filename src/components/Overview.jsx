import React from "react";
import { Mail, FileText, Linkedin, Github } from "lucide-react";

const navItems = [
  {
    label: "linkedin",
    icon: Linkedin,
    link: "https://au.linkedin.com/in/manav-trivedi-691688296",
  },
  {
    label: "github",
    icon: Github,
    link: "https://github.com/ManavTriv",
  },
  {
    label: "email",
    icon: Mail,
    link: "mailto:trivedimanav2003@gmail.com",
  },  
  {
    label: "resume",
    icon: FileText,
    link: "/resume.pdf",
  },
];

const Overview = () => {
  return (
    <div className="flex flex-row justify-between items-start w-full">
      <p className="font-secondary text-lg tracking-wide cursor-pointer text-stone-800 hover:text-indigo-300 transition-colors duration-300">
        manav trivedi
      </p>

      <div className="flex flex-col gap-1 items-end text-right">
        {navItems.map(({ label, icon: Icon, link }) => (
          <a
            key={label}
            href={link}
            target={
              link.startsWith("mailto:") || link.startsWith("/")
                ? "_self"
                : "_blank"
            }
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <p className="font-secondary text-sm sm:text-base md:text-md tracking-wide cursor-pointer text-stone-800 group-hover:text-indigo-300 transition-colors duration-300">
              {label}
            </p>
            <Icon className="text-stone-800 group-hover:text-indigo-300 transition-colors duration-300 w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Overview;
