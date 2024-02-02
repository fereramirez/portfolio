import useTheme from "../../hooks/useTheme";
import { ReactComponent as Dark } from "../../assets/svg/lightbulb-outline.svg";
import { ReactComponent as Rays } from "../../assets/svg/light.svg";

import "./ThemeButton.scss";

const ThemeButton = () => {
  const { theme, handleTheme } = useTheme();

  return (
    <div className="theme-button">
      {theme === "dark" && (
        <span
          className="light-theme-button"
          onClick={() => handleTheme("light")}
        >
          <span>
            <Dark />
            <span className="rays">
              <Rays />
            </span>
          </span>
        </span>
      )}

      {theme === "light" && (
        <span className="dark-theme-button" onClick={() => handleTheme("dark")}>
          <span>
            <Dark />
            <span className="rays">
              <Rays />
            </span>
          </span>
        </span>
      )}
    </div>
  );
};

export default ThemeButton;
