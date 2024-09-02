import useLanguageContext from "../../hooks/useLanguageContext";
import AboutTechnologies from "./AboutTechnologies";
import Paragraph from "./Paragraph";
import { ReactComponent as Cv } from "../../assets/svg/cv.svg";

import "../../App.css";
import "./About.scss";

const About = () => {
  const { texts } = useLanguageContext();

  return (
    <main className="about-container content">
      <h1 className="title">{texts.about.title}</h1>

      <Paragraph>
        {texts.about.im} <strong className="name">Fernando Ramirez</strong>
        {texts.about.firstParagraph}
      </Paragraph>

      <Paragraph>{texts.about.secondParagraph}</Paragraph>
      <Paragraph>{texts.about.technologies}</Paragraph>

      <AboutTechnologies />

      <Paragraph>
        <a
          href="https://drive.google.com/file/d/1C_ONoKRQw0HpOBAV0oY0zSd_Xu73dVm5/view"
          target="_blank"
          rel="noreferrer"
          className="resume-link"
        >
          <span>{texts.about.resume}</span>

          <span>
            <Cv />
          </span>
        </a>
      </Paragraph>
    </main>
  );
};

export default About;
