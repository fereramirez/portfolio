import "./BurgerButton.scss";

const BurgerButton = ({ setShowMenu, showMenu }) => {
  return (
    <label
      className="hamburger"
      onClick={() => setShowMenu(!showMenu)}
      onKeyDown={() => setShowMenu(!showMenu)}
    >
      <span
        className={`hamburger-top-bread${
          showMenu ? " hamburger-top-bread-open" : ""
        }`}
      />

      <span
        className={`hamburger-patty${showMenu ? " hamburger-patty-open" : ""}`}
      />

      <span
        className={`hamburger-bottom-bread${
          showMenu ? " hamburger-bottom-bread-open" : ""
        }`}
      />
    </label>
  );
};

export default BurgerButton;
