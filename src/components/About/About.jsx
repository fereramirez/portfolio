import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import Technologies from "./Technologies";
import { ReactComponent as Cv } from "../../assets/svg/cv.svg";

import css from "./About.module.css";
import common from "../../App.module.css";

function About() {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`${css.container} ${common.content}`}>
      <h1 className={css.title}>{texts.about.title}</h1>
      <div className={css.description}>
        <span> {texts.about.im}</span>{" "}
        <span className={css.name}>Fernando Ramirez</span>
        <span>{texts.about.firstParagraph}</span>
      </div>
      <div className={css.description}>{texts.about.secondParagraph}</div>
      <div className={css.description}>{texts.about.thirdParagraph}</div>
      <div className={css.description}>{texts.about.technologies}</div>

      <Technologies />

      <div className={css.description}>
        <a
          href="https://drive.google.com/file/d/1Jc8UyhxUJGqPA4FFnPPN86OUCnVJ3ifc/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className={css.resume}
        >
          <span>{texts.about.resume}</span>
          <span>
            <Cv />
          </span>
        </a>
      </div>
    </div>
  );
}

export default About;
