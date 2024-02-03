import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import useLanguageContext from "../../hooks/useLanguageContext";
import ThemeButton from "./ThemeButton";
import LanguageButton from "./LanguageButton";

import "./MobileMenu.scss";

const MobileMenu = ({ sections, showMenu }) => {
  const location = useLocation();
  const { texts } = useLanguageContext();

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
          <LanguageButton />

          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
