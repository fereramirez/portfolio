import useLanguageContext from "../../hooks/useLanguageContext";
import useAnimationContext from "../../hooks/useAnimationContext";
// import GridBackground from "../common/GridBackground";

import "./Title.scss";

const Title = ({ text }) => {
  const { texts } = useLanguageContext();
  const { linkSelected, handleLinkSelected } = useAnimationContext();

  return (
    <div
      onClick={() => handleLinkSelected(text)}
      onKeyDown={() => handleLinkSelected(text)}
      role="button"
      tabIndex={0}
      className={`title-link ${
        linkSelected === text
          ? "link-selected"
          : linkSelected !== ""
          ? "link-not-selected"
          : "link-selectable"
      }`}
    >
      <div className="title-container">
        <h1>{texts.home[text]}</h1>
      </div>

      <div className="background-hover">
        {/* <GridBackground active={true} /> quantity={GRID_ITEMS_QUANTITY} */}
      </div>
    </div>
  );
};

export default Title;
