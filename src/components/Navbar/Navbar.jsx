import React from "react";
import { NavLink } from "react-router-dom";

import useLanguageContext from "../../hooks/useLanguageContext";
import useNavbarLinks from "../../hooks/useNavbarLinks";
import useMobileMenu from "../../hooks/useMobileMenu";
import NavbarLink from "./NavbarLink";
import ThemeButton from "./ThemeButton";
import LanguageButton from "./LanguageButton";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import { SECTIONS } from "../../utils/constants";

import "../../App.css";
import "./Navbar.scss";

const Navbar = () => {
  const { texts } = useLanguageContext();

  const { buttonHover, handleHover, handleHoverLeave } =
    useNavbarLinks(SECTIONS);
  const { showMenu, handleShowMenu } = useMobileMenu();

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
          <ThemeButton />

          <LanguageButton />
        </div>
      </div>

      {/* VOLVER A VER agregar componente MobileMenu ¿y moverlo a BurgerButton junto con useBurgerButton? */}
      <MobileMenu sections={SECTIONS} showMenu={showMenu} />
    </>
  );
};

export default Navbar;
