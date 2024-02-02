import React, { useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";

import useNavbarLinks from "../../hooks/useNavbarLinks";
import useBurgerButton from "../../hooks/useBurgerButton";
import useTheme from "../../hooks/useTheme";
import LanguageContext from "../../context/LanguageContext";
import BurgerButton from "./BurgerButton";
import NavbarLink from "./NavbarLink";
import { ReactComponent as Dark } from "../../assets/svg/lightbulb-outline.svg";
import { ReactComponent as Rays } from "../../assets/svg/light.svg";
import { SECTIONS } from "../../utils/constants";

import "../../App.css";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const { language, texts, handleLanguage } = useContext(LanguageContext);
  const { theme, handleTheme } = useTheme();

  const { buttonHover, handleHover, handleHoverLeave } =
    useNavbarLinks(SECTIONS);
  const { showMenu, handleShowMenu } = useBurgerButton();

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
                <NavbarLink
                  section={section.toLowerCase()}
                  label={texts.navbarButtons[i]}
                  onPointerEnter={() => handleHover(i)}
                  onPointerLeave={handleHoverLeave}
                />
              )),
            )}
          </div>

          <div
            className="bottom-selector"
            style={{ transform: `translateX(${buttonHover * 100}%)` }}
          />

          <BurgerButton
            showMenu={showMenu}
            onClick={handleShowMenu}
            onKeyDown={handleShowMenu}
          />
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
    </>
  );
};

export default Navbar;
