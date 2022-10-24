import { useState } from "react";

const initialTheme = "dark";

const themeColors = {
  dark: { primaryColor: "#000000", secondaryColor: "#d5d1cc" },
  light: { primaryColor: "#d5d1cc", secondaryColor: "#000000" },
};

export const useTheme = () => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (newTheme) => {
    const root = document.getElementById("root");

    root.style.setProperty(
      "--background-color",
      themeColors[newTheme].primaryColor
    );
    root.style.setProperty(
      "--font-color",
      themeColors[newTheme].secondaryColor
    );

    setTheme(newTheme);
  };

  return { theme, handleTheme };
};
