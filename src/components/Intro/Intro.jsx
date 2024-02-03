import { Outlet } from "react-router-dom";

import useAnimationContext from "../../hooks/useAnimationContext";
import useIntro from "../../hooks/useIntro";
import GridBackground from "../common/GridBackground";
import { GRID_ITEMS_QUANTITY } from "../../utils/constants";

import "./Intro.scss";

const Intro = () => {
  const { runFadeOut, runPop } = useAnimationContext();
  const { topText, bottomText, bottomCursor, location } = useIntro();

  return (
    <>
      <div
        className="intro-container"
        style={{
          animationName: `${
            location.pathname !== "/" && runFadeOut
              ? "introFadeOut"
              : runPop
              ? "introPop"
              : "introFadeOut"
          }`,
          animationDelay: `${
            location.pathname !== "/" && runFadeOut
              ? "7s"
              : runPop
              ? "8s"
              : "7s"
          }`,
          animationDuration: `${
            location.pathname !== "/" && runFadeOut
              ? "2s"
              : runPop
              ? "0.1s"
              : "2s"
          }`,
        }}
      >
        <GridBackground quantity={GRID_ITEMS_QUANTITY} />

        <div className="text-container-outer">
          <div className="text-container">
            <p>{topText}</p>
            <div className="top-cursor" />
          </div>

          <div className="text-container">
            <p>{bottomText}</p>
            <div className="cursor-writing" />
            <div
              className={`bottom-cursor${
                bottomCursor ? " show-bottom-cursor" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Intro;
