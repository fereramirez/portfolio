import { useContext } from "react";
//! VOLVER A VER agregar useContext hook?

import LanguageContext from "../../context/LanguageContext";
import AboutTechnologies from "./AboutTechnologies";
import { ReactComponent as Cv } from "../../assets/svg/cv.svg";

import "../../App.css";
import "./About.scss";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <main className="about-container content">
      <h1 className="title">{texts.about.title}</h1>

      <div className="paragraph">
        <span>
          {texts.about.im} <strong className="name">Fernando Ramirez</strong>
          {texts.about.firstParagraph}
        </span>
      </div>

      <div className="paragraph">{texts.about.secondParagraph}</div>
      <div className="paragraph">{texts.about.thirdParagraph}</div>
      <div className="paragraph">{texts.about.technologies}</div>

      <AboutTechnologies />

      <div className="paragraph">
        <a
          href="https://drive.google.com/file/d/1Jc8UyhxUJGqPA4FFnPPN86OUCnVJ3ifc/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="resume-link"
        >
          <span>{texts.about.resume}</span>

          <span>
            <Cv />
          </span>
        </a>
      </div>
    </main>
  );
};

export default About;
