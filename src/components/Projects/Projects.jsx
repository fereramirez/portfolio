import useLanguageContext from "../../hooks/useLanguageContext";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

import "../../App.css";
import "./Projects.scss";

const Projects = () => {
  const { texts } = useLanguageContext();

  return (
    <>
      <main className="projects-container content">
        <h1 className="title">{texts.projects.title}</h1>

        <div className="all-projects-container">
          <ProjectCard
            name="NAFTA Productions"
            text="nafta"
            links={{
              deploy: "https://nafta.vercel.app/",
              repo: "https://github.com/fereramirez/nafta-productions",
            }}
            technologies={[
              "react",
              "next",
              "typescript",
              "css-modules",
              "sass",
            ]}
            imageUrl="https://res.cloudinary.com/fenkratos/video/upload/e_loop/dl_40/v1667187375/Portfolio/video-nafta_ihnjyo.gif"
          />

          <ProjectCard
            name="PROVIDER Store"
            text="provider"
            links={{
              deploy: "https://providerstore.vercel.app/",
              repo: "https://github.com/fereramirez/provider-client",
              repo2: "https://github.com/fereramirez/provider-backend",
            }}
            technologies={["react", "redux", "chakra", "express", "mongo"]}
            imageUrl="https://res.cloudinary.com/fenkratos/video/upload/e_loop/dl_30/v1666298641/Portfolio/video-provider2_axhz0j.gif"
          />

          {/* <ProjectCard
            name="Another DOGOS App"
            text="dogos"
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
            imageUrl="https://res.cloudinary.com/fenkratos/video/upload/e_loop/dl_30/v1666298304/Portfolio/video-dogos2_ayrgua.gif"
          /> */}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
