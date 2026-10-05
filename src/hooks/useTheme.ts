import { useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    const update = () => {
      const root = document.documentElement;
      root.classList.add("no-transitions");
      flushSync(() => setTheme(next));
      void root.offsetWidth;
      root.classList.remove("no-transitions");
      localStorage.setItem("theme", next);
    };

    if ("startViewTransition" in document) {
      document.startViewTransition(update);
    } else {
      update();
    }
  };

  return { theme, toggleTheme };
}
