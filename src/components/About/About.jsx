import { useContext } from "react";
//! VOLVER A VER agregar useContext hook?

import LanguageContext from "../../context/LanguageContext";
import Technologies from "./Technologies";
import { ReactComponent as Cv } from "../../assets/svg/cv.svg";

import css from "./About.module.css";
import common from "../../App.module.css";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`${css.container} ${common.content}`}>
      <h1 className={css.title}>{texts.about.title}</h1>

      <div className={css.paragraph}>
        <span>
          {texts.about.im}{" "}
          <strong className={css.name}>Fernando Ramirez</strong>
          {texts.about.firstParagraph}
        </span>
      </div>

      <div className={css.paragraph}>{texts.about.secondParagraph}</div>
      <div className={css.paragraph}>{texts.about.thirdParagraph}</div>
      <div className={css.paragraph}>{texts.about.technologies}</div>

      <Technologies />

      <div className={css.paragraph}>
        <a
          href="https://drive.google.com/file/d/1Jc8UyhxUJGqPA4FFnPPN86OUCnVJ3ifc/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className={css.resumeLink}
        >
          <span>{texts.about.resume}</span>

          <span>
            <Cv />
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
