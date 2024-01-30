import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";
import AnimationContext from "../../context/AnimationContext";
// import Grid from "../common/Grid";

import "./Title.scss";

const Title = ({ text }) => {
  const { texts } = useContext(LanguageContext);
  const { linkSelected, handleLinkSelected } = useContext(AnimationContext);

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

      <div className="background-hover">{/* <Grid active={true} /> */}</div>
    </div>
  );
};

export default Title;
