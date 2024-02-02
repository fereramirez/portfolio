import "./BurgerButton.scss";

const BurgerButton = ({ showMenu, ...props }) => {
  return (
    <label className="hamburger" {...props}>
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
