import { Outlet, useLocation } from "react-router-dom";

import useAnimationContext from "../../hooks/useAnimationContext";
import Grid from "../common/Grid";
import Title from "./Title";

import "./Home.scss";

const Home = () => {
  const location = useLocation();

  const { runCoverFadeOut } = useAnimationContext();

  return (
    <>
      <div
        className={`home-container${
          location.pathname !== "/" ? " not-home" : ""
        }`}
      >
        {location.pathname === "/" && (
          <>
            <Grid position="left" />

            <Title text="projects" />
            <Title text="about" />
            <Title text="contact" />
          </>
        )}

        <div
          className={`total-cover${
            runCoverFadeOut ? " total-cover-active" : ""
          }`}
        >
          <Grid color="purple" position="right" />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Home;
