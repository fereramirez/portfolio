import React, { useContext } from "react";
import ProjectsCard from "./ProjectsCard";
import LanguageContext from "../../context/LanguageContext";

import css from "./Projects.module.css";
import common from "../../App.module.css";

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`${css.container} ${common.content}`}>
      <p className={css.title}>{texts.projectsTitle}</p>

      <div className={css.allProjectsContainer}>
        <ProjectsCard
          name={"Provider Store"}
          text={"projectsProviderDescription"}
          links={{
            deploy: "https://providerstore.vercel.app/",
            repo: "https://github.com/fereramirez/provider-client",
            repo2: "https://github.com/fereramirez/provider-backend",
          }}
          technologies={["react", "redux", "chakra", "express", "mongo"]}
          imageUrl={
            "https://res.cloudinary.com/fenkratos/image/upload/v1665449606/provider_fepqlc.png"
          }
        />
        <ProjectsCard
          name={"Another DOGOS App"}
          text={"projectsDogosDescription"}
          links={{
            deploy: "https://another-dogos-app.vercel.app/",
            repo: "https://github.com/fereramirez/Another-DOGGOS-app",
          }}
          technologies={[
            "react",
            "redux",
            "express",
            "postgresql",
            "sequelize",
          ]}
          imageUrl={
            "https://res.cloudinary.com/fenkratos/image/upload/v1665449695/dogos_s0swzh.png"
          }
        />
        <ProjectsCard
          name={"Fernando Ramirez"}
          text={"projectsPortfolioDescription"}
          links={{
            deploy: "",
            repo: "https://github.com/fereramirez/portfolio",
          }}
          technologies={["react", "css-modules"]}
          imageUrl={""}
        />
      </div>
    </div>
  );
};

export default Projects;
