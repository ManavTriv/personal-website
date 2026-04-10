import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const ColorContext = createContext();
export const useColor = () => useContext(ColorContext);

export const color = { rgb: { r: 165, g: 180, b: 252 } };

export const ColorProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <ColorContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ColorContext.Provider>
  );
};
