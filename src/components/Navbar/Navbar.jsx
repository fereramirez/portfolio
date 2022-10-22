import React, { useState, useEffect, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import LanguageContext from "../../context/LanguageContext";
import { useTheme } from "../../hooks/useTheme";

import css from "./Navbar.module.css";
import common from "../../App.module.css";

/* const SECTIONS = ["Home", "About", "Projects", "Contact"]; */
const SECTIONS = ["About", "Projects", "Contact"];

const Navbar = () => {
  const location = useLocation();
  const [buttonHover, setButtonHover] = useState(
    location.pathname.substring(1).toLowerCase()
  );
  const [showMenu, setShowMenu] = useState(false);
  const { language, texts, handleLanguage } = useContext(LanguageContext);
  const { handleTheme } = useTheme();

  const handleHover = (i) => {
    setButtonHover(i);
  };
  const handleHoverLeave = () => {
    const i = SECTIONS.findIndex(
      (section) =>
        section.toLowerCase() === location.pathname.substring(1).toLowerCase()
    );

    setButtonHover(i === -1 ? 0 : i);
  };

  useEffect(() => {
    setButtonHover(
      SECTIONS.findIndex(
        (section) =>
          section.toLowerCase() === location.pathname.substring(1).toLowerCase()
      )
    );
  }, [location.pathname]);

  return (
    <>
      <div className={`${css.container} ${common.content}`}>
        <div className={css.mobileHomeButton}>Fernando</div>

        <div className={css.buttonsContainer}>
          <div className={css.buttonsBox}>
            {React.Children.toArray(
              SECTIONS.map((section, i) => (
                /*  <NavLink to={i === 0 ? "/" : section.toLowerCase()}> */
                <NavLink to={section.toLowerCase()}>
                  <div
                    className={css.button}
                    onPointerEnter={() => handleHover(i)}
                    onPointerLeave={handleHoverLeave}
                  >
                    {texts.navbarButtons[i]}
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

        <span onClick={() => handleTheme("dark")}>dark</span>
        <span onClick={() => handleTheme("light")}>light</span>

        <div
          className={css.language}
          onClick={() => handleLanguage(language === "en" ? "es" : "en")}
        >
          <span className={css.languageCurrent}>{language.toUpperCase()}</span>
          <span className={css.languageHover}>
            {language === "en" ? "ES" : "EN"}
          </span>
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
                  {texts.navbarButtons[i]}
                </div>
              </NavLink>
            ))
          )}

          <div className={css.languageMobileContainer}>
            <div
              className={css.languageMobile}
              onClick={() => handleLanguage(language === "en" ? "es" : "en")}
            >
              <span className={css.languageMobileCurrent}>
                {language.toUpperCase()}
              </span>

              <span className={css.languageMobileHover}>
                {language === "en" ? "ES" : "EN"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
