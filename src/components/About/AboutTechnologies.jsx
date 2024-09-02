/* import { ReactComponent as HTML } from "../../assets/svg/html.svg";
import { ReactComponent as CSS } from "../../assets/svg/css.svg"; */
import { ReactComponent as JS } from "../../assets/svg/js.svg";
import { ReactComponent as ReactSvg } from "../../assets/svg/react.svg";
/* import { ReactComponent as Redux } from "../../assets/svg/redux.svg"; */
import { ReactComponent as Nodejs } from "../../assets/svg/nodejs.svg";
import { ReactComponent as Express } from "../../assets/svg/express.svg";
/* import { ReactComponent as PostgresSql } from "../../assets/svg/postgresql.svg"; */
import { ReactComponent as Mongo } from "../../assets/svg/mongo.svg";
/* import { ReactComponent as Sequelize } from "../../assets/svg/sequelize.svg"; */
/* import { ReactComponent as Git } from "../../assets/svg/git.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg"; */
/* import { ReactComponent as Chakra } from "../../assets/svg/chakraui.svg"; */
import { ReactComponent as CssModules } from "../../assets/svg/cssmodules.svg";
import { ReactComponent as Sass } from "../../assets/svg/sass.svg";
import { ReactComponent as Next } from "../../assets/svg/next.svg";
import { ReactComponent as Typescript } from "../../assets/svg/typescript.svg";

import "./AboutTechnologies.scss";

const AboutTechnologies = () => {
  return (
    <div className="about-technologies-section">
      <div className="about-technologies-container">
        {/* <div className="about-technology-container">
            <HTML />
            <div className="tooltip">HTML</div>
          </div>
          <div className="about-technology-container">
            <CSS />
            <div className="tooltip">CSS</div>
          </div> */}
        <div className="about-technology-container">
          <JS />
          <div className="tooltip">JavaScript</div>
        </div>

        <div className="about-technology-container">
          <Typescript />
          <div className="tooltip">TypeScript</div>
        </div>

        <div className="about-technology-container">
          <ReactSvg />
          <div className="tooltip">React.js</div>
        </div>
        {/* <div className="about-technology-container">
          <Redux />
          <div className="tooltip">Redux.js</div>
        </div> */}
        {/* <div className="about-technology-container">
          <Chakra />
          <div className="tooltip">Chakra UI</div>
        </div> */}
        <div className="about-technology-container">
          <span className="css-modules-svg-container">
            <CssModules />
          </span>
          <div className="tooltip">CSS Modules</div>
        </div>
        <div className="about-technology-container">
          <Sass />
          <div className="tooltip">Sass</div>
        </div>

        {/* <div className="about-technology-container">
            <Git />
            <div className="tooltip">Git</div>
          </div>
          <div className="about-technology-container">
            <Github />
            <div className="tooltip">GitHub</div>
          </div> */}

        <div className="about-technology-container">
          <Nodejs />
          <div className="tooltip">Node.js</div>
        </div>
        <div className="about-technology-container">
          <Express />
          <div className="tooltip">Express.js</div>
        </div>
        <div className="about-technology-container">
          <Mongo />
          <div className="tooltip">MongoDB</div>
        </div>
        {/* <div className="about-technology-container">
          <PostgresSql />
          <div className="tooltip">PostgreSQL</div>
        </div>
        <div className="about-technology-container">
          <Sequelize />
          <div className="tooltip">Sequelize</div>
        </div> */}

        <div className="about-technology-container">
          <Next />
          <div className="tooltip">Next.js</div>
        </div>
      </div>
    </div>
  );
};

export default AboutTechnologies;
