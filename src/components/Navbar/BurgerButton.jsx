import css from "./BurgerButton.module.css";

const BurgerButton = ({ setShowMenu, showMenu }) => {
  return (
    <label
      className={css.hamburger}
      onClick={() => setShowMenu(!showMenu)}
      onKeyDown={() => setShowMenu(!showMenu)}
    >
      <span
        className={`${css.hamburgerTopBread} ${
          showMenu ? css.hamburgerTopBreadOpen : ""
        }`}
      />
      <span
        className={`${css.hamburgerPatty} ${
          showMenu ? css.hamburgerPattyOpen : ""
        }`}
      />
      <span
        className={`${css.hamburgerBottomBread} ${
          showMenu ? css.hamburgerBottomBreadOpen : ""
        }`}
      />
    </label>
  );
};

export default BurgerButton;
