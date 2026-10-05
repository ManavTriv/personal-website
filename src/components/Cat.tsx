import { useState } from "react";

type CatProps = {
  asleep: boolean;
  onToggle: () => void;
};

const Cat = ({ asleep, onToggle }: CatProps) => {
  const [purring, setPurring] = useState(false);

  const handleClick = () => {
    onToggle();
    setPurring(true);
    setTimeout(() => setPurring(false), 1500);
  };

  const eyes = asleep ? "-   -" : purring ? "^   ^" : "o   o";

  const cat = [
    " /\\___/\\",
    `( ${eyes} )___`,
    "(  =^=  )   \\__",
    " (__)(__)____)~",
  ].join("\n");

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative shrink-0 text-left font-mono text-xs leading-tight tracking-normal text-stone-400 dark:text-stone-500 select-none cursor-pointer"
    >
      <pre>{cat}</pre>
      <span className="block mt-1 text-[10px] text-stone-500 dark:text-stone-400">
        {asleep ? "click to wake" : "click to nap"}
      </span>
      {asleep && !purring && (
        <span className="absolute -top-3 left-[11ch] motion-safe:animate-[drift_2.5s_ease-out_infinite]">
          z
        </span>
      )}
      {purring && (
        <span className="absolute -top-3 left-[11ch] motion-safe:animate-[drift_1.5s_ease-out_forwards]">
          prrr
        </span>
      )}
    </button>
  );
};

export default Cat;
