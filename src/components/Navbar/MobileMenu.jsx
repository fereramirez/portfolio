import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import useTheme from "../../hooks/useTheme";
import LanguageContext from "../../context/LanguageContext";
import { ReactComponent as Dark } from "../../assets/svg/lightbulb-outline.svg";
import { ReactComponent as Rays } from "../../assets/svg/light.svg";

import "./MobileMenu.scss";

const MobileMenu = ({ sections, showMenu }) => {
  const location = useLocation();
  const { language, texts, handleLanguage } = useContext(LanguageContext);

  const { theme, handleTheme } = useTheme();

  return (
    <div className={`mobile-menu${showMenu ? " show-mobile-menu" : ""}`}>
      <div className="mobile-buttons-container">
        {React.Children.toArray(
          sections.map((section, i) => (
            <NavLink
              to={section.toLowerCase()}
              /* onClick={() => handleShowMenu(false)} */
            >
              <div
                className={
                  section.toLowerCase() === location.pathname.substring(1)
                    ? "mobile-current-section"
                    : "mobile-button"
                }
              >
                {texts.navbarButtons[i]}
              </div>
            </NavLink>
          )),
        )}

        <div className="mobile-selectors">
          <div className="language-mobile-container">
            <div
              className="language-mobile"
              onClick={() => handleLanguage(language === "en" ? "es" : "en")}
            >
              <span className="language-mobile-current">
                {language.toUpperCase()}
              </span>

              <span className="language-mobile-hover">
                {language === "en" ? "ES" : "EN"}
              </span>
            </div>
          </div>

          <div className="theme-buttons">
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
              <span
                className="dark-theme-button"
                onClick={() => handleTheme("dark")}
              >
                <span>
                  <Dark />
                  <span className="rays">
                    <Rays />
                  </span>
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
