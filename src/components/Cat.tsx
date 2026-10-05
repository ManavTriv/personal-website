import { useState } from "react";

type CatProps = {
  asleep: boolean;
};

const Cat = ({ asleep }: CatProps) => {
  const [purring, setPurring] = useState(false);

  const pet = () => {
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
      onClick={pet}
      className="relative text-left font-mono text-xs leading-tight text-stone-400 dark:text-stone-500 select-none cursor-pointer"
    >
      <pre>{cat}</pre>
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
