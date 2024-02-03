import useLanguageContext from "../../hooks/useLanguageContext";
import { ReactComponent as ReactSvg } from "../../assets/svg/react.svg";
import { ReactComponent as Redux } from "../../assets/svg/redux.svg";
import { ReactComponent as Nodejs } from "../../assets/svg/nodejs.svg";
import { ReactComponent as Express } from "../../assets/svg/express.svg";
import { ReactComponent as PostgresSql } from "../../assets/svg/postgresql.svg";
import { ReactComponent as Mongo } from "../../assets/svg/mongo.svg";
import { ReactComponent as Sequelize } from "../../assets/svg/sequelize.svg";
import { ReactComponent as Earth } from "../../assets/svg/earth.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Chakra } from "../../assets/svg/chakraui.svg";
import { ReactComponent as Sass } from "../../assets/svg/sass.svg";
import { ReactComponent as CssModules } from "../../assets/svg/cssmodules.svg";
import { ReactComponent as Next } from "../../assets/svg/next.svg";
import { ReactComponent as Typescript } from "../../assets/svg/typescript.svg";

import "./ProjectCard.scss";

const ProjectCard = ({ name, text, links, technologies, imageUrl }) => {
  const { texts } = useLanguageContext();

  return (
    <div className="project-card">
      <div className="project-data">
        <p className="project-name">{name}</p>
        <p className="project-description">{texts.projects[text]}</p>

        <div className="project-image-mobile">
          <img src={imageUrl} alt={name} />
        </div>

        <div className="project-links-container project-technologies-container">
          <a
            href={links.deploy}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <div className="project-technology-container">
              <Earth />
            </div>
          </a>

          <a
            href={links.repo}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <div className="project-technology-container">
              <Github />
              {links?.repo2 && <div className="tooltip">Client Repo</div>}
            </div>
          </a>

          {links?.repo2 && (
            <a
              href={links.repo2}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <div className="project-technology-container">
                <Github />
                <div className="tooltip">Backend Repo</div>
              </div>
            </a>
          )}
        </div>

        <div className="project-technologies-container">
          {technologies.includes("typescript") && (
            <div className="project-technology-container">
              <Typescript />
              <div className="tooltip">TypeScript</div>
            </div>
          )}

          {technologies.includes("react") && (
            <div className="project-technology-container">
              <ReactSvg />
              <div className="tooltip">React.js</div>
            </div>
          )}

          {technologies.includes("redux") && (
            <div className="project-technology-container">
              <Redux />
              <div className="tooltip">Redux.js</div>
            </div>
          )}

          {technologies.includes("chakra") && (
            <div className="project-technology-container">
              <Chakra />
              <div className="tooltip">Chakra UI</div>
            </div>
          )}

          {technologies.includes("css-modules") && (
            <div className="project-technology-container project-technology-container-css-modules">
              <span className="css-modules-svg-container">
                <CssModules />
              </span>
              <div className="tooltip">CSS Modules</div>
            </div>
          )}

          {technologies.includes("sass") && (
            <div className="project-technology-container">
              <Sass />
              <div className="tooltip">Sass</div>
            </div>
          )}

          {technologies.includes("node") && (
            <div className="project-technology-container">
              <Nodejs />
              <div className="tooltip">Node.js</div>
            </div>
          )}

          {technologies.includes("express") && (
            <div className="project-technology-container">
              <Express />
              <div className="tooltip">Express.js</div>
            </div>
          )}

          {technologies.includes("mongo") && (
            <div className="project-technology-container">
              <Mongo />
              <div className="tooltip">MongoDB</div>
            </div>
          )}

          {technologies.includes("postgresql") && (
            <div className="project-technology-container">
              <PostgresSql />
              <div className="tooltip">PostgreSQL</div>
            </div>
          )}

          {technologies.includes("sequelize") && (
            <div className="project-technology-container">
              <Sequelize />
              <div className="tooltip">Sequelize</div>
            </div>
          )}

          {technologies.includes("next") && (
            <div className="project-technology-container">
              <Next />
              <div className="tooltip">Next.js</div>
            </div>
          )}
        </div>
      </div>

      <div className="project-image">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
};

export default ProjectCard;
