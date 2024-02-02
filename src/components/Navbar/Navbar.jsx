import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import useNavbarLinks from "../../hooks/useNavbarLinks";
import useBurgerButton from "../../hooks/useBurgerButton";
import useTheme from "../../hooks/useTheme";
import LanguageContext from "../../context/LanguageContext";
import NavbarLink from "./NavbarLink";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import { ReactComponent as Dark } from "../../assets/svg/lightbulb-outline.svg";
import { ReactComponent as Rays } from "../../assets/svg/light.svg";
import { SECTIONS } from "../../utils/constants";

import "../../App.css";
import "./Navbar.scss";

const Navbar = () => {
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

      {/* VOLVER A VER agregar componente MobileMenu ¿y moverlo a BurgerButton junto con useBurgerButton? */}
      <MobileMenu sections={SECTIONS} showMenu={showMenu} />
    </>
  );
};

export default Navbar;
