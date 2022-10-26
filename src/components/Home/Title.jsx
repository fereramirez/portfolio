import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import AnimationContext from "../../context/AnimationContext";
//import Grid from "../common/Grid";

import css from "./Title.module.css";

const Title = ({ text }) => {
  const { texts } = useContext(LanguageContext);
  const { linkSelected, handleLinkSelected } = useContext(AnimationContext);

  return (
    <div
      onClick={() => handleLinkSelected(text)}
      className={`${css.link} ${
        linkSelected === text
          ? css.linkSelected
          : linkSelected !== ""
          ? css.linkNotSelected
          : css.linkSelectable
      }`}
    >
      <div className={css.title}>
        <h1>{texts.homeLinks[text]}</h1>
      </div>

      <div className={css.backgroundHover}>{/* <Grid active={true} /> */}</div>
    </div>
  );
};

export default Title;
