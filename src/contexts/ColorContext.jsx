import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

const makeColor = (name, r, g, b) => ({
  name,
  rgb: { r, g, b },
  rgba: (opacity) => `rgba(${r}, ${g}, ${b}, ${opacity})`,
});

const COLOR_PALETTE = [
  makeColor("indigo-300", 165, 180, 252),
  makeColor("red-300", 252, 165, 165),
  makeColor("green-300", 134, 239, 172),
  makeColor("purple-300", 196, 181, 253),
  makeColor("pink-300", 249, 168, 212),
  makeColor("orange-300", 253, 186, 116),
  makeColor("cyan-300", 103, 232, 249),
];

const DEFAULT_COLOR = COLOR_PALETTE[0];

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const randomizeColor = useCallback(() => {
    const otherColors = COLOR_PALETTE.filter((c) => c.name !== color.name);
    const newColor =
      otherColors[Math.floor(Math.random() * otherColors.length)];
    setColor(newColor);
  }, [color.name]);

  return (
    <ColorContext.Provider
      value={{ color, randomizeColor, theme, toggleTheme }}
    >
      {children}
    </ColorContext.Provider>
  );
};
