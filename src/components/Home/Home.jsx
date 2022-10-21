import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LanguageContext from "../../context/LanguageContext";

import css from "./Home.module.css";
import common from "../../App.module.css";
import Title from "./Title";

const Home = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`${css.container}`}>
      {/* <div className={`${css.greeting} ${css.content1}`}>
        {texts.homeGreeting}
        <span className={css.name}>
          <NavLink to={"/about"}>Fernando Ramirez</NavLink>
        </span>
      </div>

      <div className={css.content2}>
        <p className={css.title}>
          <NavLink to={"/projects"}>{texts.homeTitle}</NavLink>
        </p>
        <div className={css.titleUnderline}></div>
      </div> */}

      <Title text={"Proyectos"} to={"/projects"} />
      <Title text={"Sobre mi"} to={"/about"} />
      <Title text={"Contacto"} to={"/contact"} />

      {/* <div className={css.content3}>
        <p className={css.title}>
          <NavLink to={"/contact"}>{texts.homeDescription}</NavLink>
        </p>
        <div className={css.titleUnderline}></div>
      </div> */}
    </div>
  );
};

export default Home;
