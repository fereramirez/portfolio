import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import LanguageContext from "../../context/LanguageContext";
import ThemeButton from "./ThemeButton";

import "./MobileMenu.scss";

const MobileMenu = ({ sections, showMenu }) => {
  const location = useLocation();
  const { language, texts, handleLanguage } = useContext(LanguageContext);

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

          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
