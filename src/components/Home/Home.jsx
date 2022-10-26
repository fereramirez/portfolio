import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Grid from "../common/Grid";
import AnimationContext from "../../context/AnimationContext";

import css from "./Home.module.css";
import Title from "./Title";

const Home = () => {
  const location = useLocation();
  const { runCoverFadeOut } = useContext(AnimationContext);

  return (
    <>
      <div
        className={`${css.container} ${
          location.pathname !== "/" ? css.notHome : ""
        }`}
      >
        {location.pathname === "/" && (
          <>
            <Grid position={"left"} />

            <>
              <Title text={"projects"} />
              <Title text={"about"} />
              <Title text={"contact"} />
            </>
          </>
        )}

        <div
          className={`${css.totalCover} ${
            runCoverFadeOut ? css.totalCoverActive : ""
          }`}
        >
          <Grid color={"purple"} position={"right"} />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
