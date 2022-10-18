import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import BurgerButton from "./BurgerButton";

import css from "./Navbar.module.css";

const SECTIONS = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const location = useLocation();
  const [buttonHover, setButtonHover] = useState(
    location.pathname.substring(1).toLocaleLowerCase()
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = (i) => {
    setButtonHover(i);
  };
  const handleHoverLeave = () => {
    const i = SECTIONS.findIndex(
      (section) =>
        section.toLowerCase() ===
        location.pathname.substring(1).toLocaleLowerCase()
    );

    setButtonHover(i === -1 ? 0 : i);
  };

  useEffect(() => {
    console.log(
      "deberia entrar",
      location.pathname.substring(1).toLocaleLowerCase()
    );
    setButtonHover(location.pathname.substring(1).toLocaleLowerCase());
  }, [location.pathname]);

  return (
    <>
      <div className={css.container}>
        <div className={css.homeButton}>Fernando</div>

        <div className={css.buttonsContainer}>
          <div className={css.buttonsBox}>
            {React.Children.toArray(
              SECTIONS.map((section, i) => (
                <NavLink to={section.toLowerCase()}>
                  <div
                    className={css.button}
                    onPointerEnter={() => handleHover(i)}
                    onPointerLeave={handleHoverLeave}
                  >
                    {section}
                  </div>
                </NavLink>
              ))
            )}
          </div>

          <div
            className={css.bottomSelector}
            style={{ transform: `translateX(${buttonHover * 100}%)` }}
          ></div>

          <BurgerButton setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>
      </div>

      <div
        className={`${css.mobileMenu} ${showMenu ? css.showMobileMenu : ""}`}
      >
        <div className={css.mobileButtonsContainer}>
          {React.Children.toArray(
            SECTIONS.map((section, i) => (
              <NavLink
                to={section.toLowerCase()}
                onClick={() => setShowMenu(false)}
              >
                <div
                  className={`${
                    section.toLowerCase() === location.pathname.substring(1)
                      ? css.mobileCurrentSection
                      : css.mobileButton
                  }`}
                >
                  {section}
                </div>
              </NavLink>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
