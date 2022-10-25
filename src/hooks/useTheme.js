import { useState } from "react";

const initialTheme = "dark";

const themeColors = {
  dark: { backgroundColor: "#000000", fontColor: "#d5d1cc" },
  light: { backgroundColor: "#d5d1cc", fontColor: "#000000" },
};

export const useTheme = () => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (newTheme) => {
    const root = document.getElementById("root");

    root.style.setProperty(
      "--background-color",
      themeColors[newTheme].backgroundColor
    );
    root.style.setProperty("--font-color", themeColors[newTheme].fontColor);

    setTheme(newTheme);
  };

  return { theme, handleTheme };
};
