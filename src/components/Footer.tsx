import { Emoji } from "iconoir-react";

const Footer = () => (
  <footer className="w-full">
    <p className="font-secondary text-[10px] sm:text-xs flex items-center gap-1 tracking-wide text-stone-500 dark:text-stone-400">
      <Emoji className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]" />
      made using typescript, react and tailwind css
    </p>
  </footer>
);

export default Footer;
