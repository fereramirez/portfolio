import { useContext } from "react";
import { Outlet } from "react-router-dom";

import useIntro from "../../hooks/useIntro";
import AnimationContext from "../../context/AnimationContext";
import Grid from "../common/Grid";

import "./Intro.scss";

const Intro = () => {
  const { runFadeOut, runPop } = useContext(AnimationContext);

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
        <Grid />

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
