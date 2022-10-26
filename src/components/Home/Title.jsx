import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../../context/LanguageContext";
//import Grid from "../common/Grid";

import css from "./Title.module.css";

const Test = ({ text, setLinkSelected, linkSelected }) => {
  const { texts } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleSelectedLink = () => {
    setLinkSelected(text);

    setTimeout(() => {
      navigate(`/${text}`);
    }, 2000);
  };

  return (
    <div
      onClick={handleSelectedLink}
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
