import { useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    const update = () => flushSync(() => setTheme(next));

    if ("startViewTransition" in document) {
      document.startViewTransition(update);
    } else {
      update();
    }
  };

  return { theme, toggleTheme };
}
