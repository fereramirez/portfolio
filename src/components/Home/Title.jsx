import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";
import AnimationContext from "../../context/AnimationContext";
// import Grid from "../common/Grid";

import css from "./Title.module.css";

const Title = ({ text }) => {
  const { texts } = useContext(LanguageContext);
  const { linkSelected, handleLinkSelected } = useContext(AnimationContext);

  return (
    <div
      onClick={() => handleLinkSelected(text)}
      onKeyDown={() => handleLinkSelected(text)}
      role="button"
      tabIndex={0}
      className={`${css.titleLink} ${
        linkSelected === text
          ? css.linkSelected
          : linkSelected !== ""
          ? css.linkNotSelected
          : css.linkSelectable
      }`}
    >
      <div className={css.titleContainer}>
        <h1>{texts.home[text]}</h1>
      </div>

      <div className={css.backgroundHover}>{/* <Grid active={true} /> */}</div>
    </div>
  );
};

export default Title;
