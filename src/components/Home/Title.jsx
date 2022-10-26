import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../../context/LanguageContext";
import AnimationContext from "../../context/AnimationContext";
//import Grid from "../common/Grid";

import css from "./Title.module.css";

const Test = ({
  text /* , setLinkSelected, linkSelected, setRunFadeOut  */,
}) => {
  const navigate = useNavigate();
  const { texts } = useContext(LanguageContext);
  const { linkSelected, handleLinkSelected } = useContext(AnimationContext);

  /*   const handleSelectedLink = () => {
    setLinkSelected(text);
    setRunFadeOut(false);

    setTimeout(() => {
      navigate(`/${text}`);
    }, 2000);
  }; */

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

export default Test;
