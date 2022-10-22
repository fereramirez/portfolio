import { useState } from "react";

const initialTheme = "dark";

const themeColors = {
  dark: { primaryColor: "#000000", secondaryColor: "#d5d1cc" },
  light: { primaryColor: "#d5d1cc", secondaryColor: "#000000" },
};

export const useTheme = () => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = () => {
    const root = document.getElementById("root");

    root.style.setProperty("--primary-color", themeColors[theme].primaryColor);
    root.style.setProperty(
      "--secondary-color",
      themeColors[theme].secondaryColor
    );

    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, handleTheme };
};
