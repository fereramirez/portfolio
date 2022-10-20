import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { ReactComponent as HTML } from "../../assets/svg/html.svg";
import { ReactComponent as CSS } from "../../assets/svg/css.svg";
import { ReactComponent as JS } from "../../assets/svg/js.svg";
import { ReactComponent as ReactSvg } from "../../assets/svg/react.svg";
import { ReactComponent as Redux } from "../../assets/svg/redux.svg";
import { ReactComponent as Nodejs } from "../../assets/svg/nodejs.svg";
import { ReactComponent as Express } from "../../assets/svg/express.svg";
import { ReactComponent as PostgresSql } from "../../assets/svg/postgresql.svg";
import { ReactComponent as Mongo } from "../../assets/svg/mongo.svg";
import { ReactComponent as Sequelize } from "../../assets/svg/sequelize.svg";
import { ReactComponent as Git } from "../../assets/svg/git.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Chakra } from "../../assets/svg/chakraui.svg";
import { ReactComponent as Sass } from "../../assets/svg/sass.svg";
import { ReactComponent as CssModules } from "../../assets/svg/cssmodules.svg";
import { ReactComponent as Next } from "../../assets/svg/next.svg";

import css from "./About.module.css";
import common from "../../App.module.css";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`${css.container} ${common.content}`}>
      <div className={css.title}>{texts.aboutTitle}</div>
      <div className={css.description}>{texts.aboutFirstParagraph}</div>
      <div className={css.description}>{texts.aboutSecondParagraph}</div>
      <div className={css.description}>{texts.aboutThirdParagraph}</div>
      <div className={css.description}>{texts.aboutTechnologies}</div>

      <div className={css.technologiesSection}>
        <div className={css.technologiesContainer}>
          {/* <div className={css.technologyContainer}>
            <HTML />
            <div className={css.tooltip}>HTML</div>
          </div>
          <div className={css.technologyContainer}>
            <CSS />
            <div className={css.tooltip}>CSS</div>
          </div>
          <div className={css.technologyContainer}>
            <JS />
            <div className={css.tooltip}>JavaScript</div>
          </div> */}

          <div className={css.technologyContainer}>
            <ReactSvg />
            <div className={css.tooltip}>React.js</div>
          </div>
          <div className={css.technologyContainer}>
            <Redux />
            <div className={css.tooltip}>Redux.js</div>
          </div>
          <div className={css.technologyContainer}>
            <Chakra />
            <div className={css.tooltip}>Chakra UI</div>
          </div>
          <div className={css.technologyContainer}>
            <span className={css.cssModulesSvgContainer}>
              <CssModules />
            </span>
            <div className={css.tooltip}>CSS Modules</div>
          </div>
          {/* <div className={css.technologyContainer}>
            <Sass />
            <div className={css.tooltip}>Sass</div>
          </div> */}

          {/* <div className={css.technologyContainer}>
            <Git />
            <div className={css.tooltip}>Git</div>
          </div>
          <div className={css.technologyContainer}>
            <Github />
            <div className={css.tooltip}>GitHub</div>
          </div> */}

          <div className={css.technologyContainer}>
            <Nodejs />
            <div className={css.tooltip}>Node.js</div>
          </div>
          <div className={css.technologyContainer}>
            <Express />
            <div className={css.tooltip}>Express.js</div>
          </div>
          <div className={css.technologyContainer}>
            <Mongo />
            <div className={css.tooltip}>MongoDB</div>
          </div>
          <div className={css.technologyContainer}>
            <PostgresSql />
            <div className={css.tooltip}>PostgreSQL</div>
          </div>
          <div className={css.technologyContainer}>
            <Sequelize />
            <div className={css.tooltip}>Sequelize</div>
          </div>

          {/* <div className={css.technologyContainer}>
            <Next />
            <div className={css.tooltip}>Next.js</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
