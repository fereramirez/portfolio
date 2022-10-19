import { NavLink } from "react-router-dom";
import css from "./Home.module.css";
import common from "../../App.module.css";

const Home = () => {
  return (
    <div className={`${css.container} ${common.content}`}>
      <div className={css.greeting}>
        Hi, I'm{" "}
        <span className={css.name}>
          <NavLink to={"/about"}>Fernando</NavLink>
        </span>
        .
      </div>

      <div>
        <p className={css.title}>
          <NavLink to={"/projects"}>Frontend Developer.</NavLink>
        </p>
        <div className={css.titleUnderline}></div>
      </div>

      <div>
        <p className={css.title}>
          <NavLink to={"/contact"}>Self-taught person.</NavLink>
        </p>
        <div className={css.titleUnderline}></div>
      </div>
    </div>
  );
};

export default Home;
