import css from "./BurgerButton.module.css";

const BurgerButton = ({ setShowMenu, showMenu }) => {
  return (
    <label className={css.hamburger} onClick={() => setShowMenu(!showMenu)}>
      <span
        className={`${css.hamburgerTopBread} ${
          showMenu ? css.hamburgerTopBreadOpen : ""
        }`}
      ></span>
      <span
        className={`${css.hamburgerPatty} ${
          showMenu ? css.hamburgerPattyOpen : ""
        }`}
      ></span>
      <span
        className={`${css.hamburgerBottomBread} ${
          showMenu ? css.hamburgerBottomBreadOpen : ""
        }`}
      ></span>
    </label>
  );
};

export default BurgerButton;
