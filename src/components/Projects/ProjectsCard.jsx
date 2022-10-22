import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LanguageContext from "../../context/LanguageContext";
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

import css from "./ProjectsCard.module.css";

const ProjectsCard = ({ name, text, links, technologies, imageUrl }) => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={css.project}>
      <div className={css.projectData}>
        <p className={css.projectName}>{name}</p>
        <p className={css.projectDescription}>{texts[text]}</p>

        <div className={css.projectImageMobile}>
          <img src={imageUrl} alt={name} />
        </div>

        <div className={`${css.links} ${css.technologiesContainer}`}>
          <a
            href={links.deploy}
            target="_blank"
            rel="noreferrer"
            className={css.link}
          >
            <div className={css.technologyContainer}>
              <Earth />
            </div>
          </a>

          <a
            href={links.repo}
            target="_blank"
            rel="noreferrer"
            className={css.link}
          >
            <div className={css.technologyContainer}>
              <Github />
              {links?.repo2 && <div className={css.tooltip}>Client Repo</div>}
            </div>
          </a>

          {links?.repo2 && (
            <a
              href={links.repo2}
              target="_blank"
              rel="noreferrer"
              className={css.link}
            >
              <div className={css.technologyContainer}>
                <Github />
                <div className={css.tooltip}>Backend Repo</div>
              </div>
            </a>
          )}
        </div>

        <div className={css.technologiesContainer}>
          {technologies.includes("react") && (
            <div className={css.technologyContainer}>
              <ReactSvg />
              <div className={css.tooltip}>React.js</div>
            </div>
          )}

          {technologies.includes("redux") && (
            <div className={css.technologyContainer}>
              <Redux />
              <div className={css.tooltip}>Redux.js</div>
            </div>
          )}

          {technologies.includes("chakra") && (
            <div className={css.technologyContainer}>
              <Chakra />
              <div className={css.tooltip}>Chakra UI</div>
            </div>
          )}

          {technologies.includes("css-modules") && (
            <div className={css.technologyContainer}>
              <span className={css.cssModulesSvgContainer}>
                <CssModules />
              </span>
              <div className={css.tooltip}>CSS Modules</div>
            </div>
          )}

          {technologies.includes("sass") && (
            <div className={css.technologyContainer}>
              <Sass />
              <div className={css.tooltip}>Sass</div>
            </div>
          )}

          {technologies.includes("node") && (
            <div className={css.technologyContainer}>
              <Nodejs />
              <div className={css.tooltip}>Node.js</div>
            </div>
          )}

          {technologies.includes("express") && (
            <div className={css.technologyContainer}>
              <Express />
              <div className={css.tooltip}>Express.js</div>
            </div>
          )}

          {technologies.includes("mongo") && (
            <div className={css.technologyContainer}>
              <Mongo />
              <div className={css.tooltip}>MongoDB</div>
            </div>
          )}

          {technologies.includes("postgresql") && (
            <div className={css.technologyContainer}>
              <PostgresSql />
              <div className={css.tooltip}>PostgreSQL</div>
            </div>
          )}

          {technologies.includes("sequelize") && (
            <div className={css.technologyContainer}>
              <Sequelize />
              <div className={css.tooltip}>Sequelize</div>
            </div>
          )}

          {technologies.includes("next") && (
            <div className={css.technologyContainer}>
              <Next />
              <div className={css.tooltip}>Next.js</div>
            </div>
          )}
        </div>
      </div>

      <div className={css.projectImage}>
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
};

export default ProjectsCard;
