import { createContext, useContext, useState, useEffect } from "react";

const ColorContext = createContext();

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

const DEFAULT_COLOR = {
  name: "indigo-300",
  rgb: { r: 165, g: 180, b: 252 },
  rgba: (opacity) => `rgba(165, 180, 252, ${opacity})`,
};

const COLOR_PALETTE = [
  { name: "indigo-300", rgb: { r: 165, g: 180, b: 252 } },
  { name: "red-400", rgb: { r: 248, g: 113, b: 113 } },
  { name: "emerald-400", rgb: { r: 52, g: 211, b: 153 } },
  { name: "purple-400", rgb: { r: 192, g: 132, b: 252 } },
  { name: "pink-400", rgb: { r: 244, g: 114, b: 182 } },
  { name: "orange-400", rgb: { r: 251, g: 146, b: 60 } },
  { name: "cyan-400", rgb: { r: 34, g: 211, b: 238 } },
  { name: "rose-400", rgb: { r: 251, g: 113, b: 133 } },
  { name: "violet-400", rgb: { r: 167, g: 139, b: 250 } },
  { name: "teal-400", rgb: { r: 45, g: 212, b: 191 } },
];

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(() => {
    const saved = localStorage.getItem("themeColor");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_COLOR;
      }
    }
    return DEFAULT_COLOR;
  });

  useEffect(() => {
    localStorage.setItem("themeColor", JSON.stringify(color));
  }, [color]);

  const randomizeColor = () => {
    const availableColors = COLOR_PALETTE.filter((c) => c.name !== color.name);
    const randomColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];

    setColor({
      name: randomColor.name,
      rgb: randomColor.rgb,
      rgba: (opacity) =>
        `rgba(${randomColor.rgb.r}, ${randomColor.rgb.g}, ${randomColor.rgb.b}, ${opacity})`,
    });
  };

  const value = {
    color,
    randomizeColor,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
