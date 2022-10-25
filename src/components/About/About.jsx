import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import Technologies from "./Technologies";

import css from "./About.module.css";
import common from "../../App.module.css";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`${css.container} ${common.content}`}>
      <div className={css.title}>{texts.aboutTitle}</div>
      <div className={css.description}>
        <span> {texts.aboutIm}</span>{" "}
        <span className={css.name}>Fernando Ramirez</span>
        <span>{texts.aboutFirstParagraph}</span>
      </div>
      <div className={css.description}>{texts.aboutSecondParagraph}</div>
      <div className={css.description}>{texts.aboutThirdParagraph}</div>
      <div className={css.description}>{texts.aboutTechnologies}</div>

      <Technologies />

      <div className={css.description}>
        <a
          href="https://drive.google.com/file/d/1aCoeYC6wihbg5_vXOBfz8h1PD-8G4-RP/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={css.resume}
        >
          {texts.aboutResume}
        </a>
      </div>
    </div>
  );
};

export default About;
