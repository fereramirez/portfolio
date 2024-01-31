import React, { useState, useEffect, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";

import LanguageContext from "../../context/LanguageContext";
import BurgerButton from "./BurgerButton";
import useTheme from "../../hooks/useTheme";
import { ReactComponent as Dark } from "../../assets/svg/lightbulb-outline.svg";
import { ReactComponent as Rays } from "../../assets/svg/light.svg";

import "../../App.css";
import "./Navbar.scss";

/* const SECTIONS = ["Home", "About", "Projects", "Contact"]; */
const SECTIONS = ["About", "Projects", "Contact"];

const Navbar = () => {
  const location = useLocation();
  const [buttonHover, setButtonHover] = useState(
    location.pathname.substring(1).toLowerCase(),
  );
  const [showMenu, setShowMenu] = useState(false);
  const { language, texts, handleLanguage } = useContext(LanguageContext);
  const { theme, handleTheme } = useTheme();

  const handleHover = (i) => {
    setButtonHover(i);
  };

  const handleHoverLeave = () => {
    const i = SECTIONS.findIndex(
      (section) =>
        section.toLowerCase() === location.pathname.substring(1).toLowerCase(),
    );

    setButtonHover(i === -1 ? -2 : i);
  };

  useEffect(() => {
    setShowMenu(false);

    const i = SECTIONS.findIndex(
      (section) =>
        section.toLowerCase() === location.pathname.substring(1).toLowerCase(),
    );

    setButtonHover(i === -1 ? -1.5 : i);
  }, [location.pathname]);

  return (
    <>
      <div className="navbar-container content">
        <span className="mobile-home-button">
          <NavLink to="/">Fernando</NavLink>
        </span>

        <div className="buttons-container">
          <div className="buttons-box">
            {React.Children.toArray(
              SECTIONS.map((section, i) => (
                /*  <NavLink to={i === 0 ? "/" : section.toLowerCase()}> */
                <NavLink to={section.toLowerCase()}>
                  <div
                    className="button"
                    onPointerEnter={() => handleHover(i)}
                    onPointerLeave={handleHoverLeave}
                  >
                    {texts.navbarButtons[i]}
                  </div>
                </NavLink>
              )),
            )}
          </div>

          <div
            className="bottom-selector"
            style={{ transform: `translateX(${buttonHover * 100}%)` }}
          />

          <BurgerButton setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>

        <div className="selectors">
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

          <div
            className="language-button"
            onClick={() => handleLanguage(language === "en" ? "es" : "en")}
          >
            <span className="language-current">{language.toUpperCase()}</span>
            <span className="language-hover">
              {language === "en" ? "ES" : "EN"}
            </span>
          </div>
        </div>
      </div>

      <div className={`mobile-menu${showMenu ? " show-mobile-menu" : ""}`}>
        <div className="mobile-buttons-container">
          {React.Children.toArray(
            SECTIONS.map((section, i) => (
              <NavLink
                to={section.toLowerCase()}
                /* onClick={() => setShowMenu(false)} */
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
    </>
  );
};

export default Navbar;
