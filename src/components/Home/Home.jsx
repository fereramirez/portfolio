import { Outlet, useLocation } from "react-router-dom";

import useAnimationContext from "../../hooks/useAnimationContext";
import GridBackground from "../common/GridBackground";
import Title from "./Title";
import { GRID_ITEMS_QUANTITY } from "../../utils/constants";

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
            <GridBackground position="left" quantity={GRID_ITEMS_QUANTITY} />

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
          <GridBackground
            color="purple"
            position="right"
            quantity={GRID_ITEMS_QUANTITY}
          />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Home;
