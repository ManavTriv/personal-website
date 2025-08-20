import { Smile } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      <p className="font-secondary text-[10px] sm:text-xs text-stone-400 flex items-center gap-1 tracking-wide">
        <Smile className="text-stone-400 w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]" />
        made using javascript, react and tailwind css
      </p>
    </footer>
  );
};

export default Footer;
