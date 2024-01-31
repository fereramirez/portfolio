import { useEffect, useState, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AnimationContext from "../../context/AnimationContext";
import Grid from "../common/Grid";

import "./Intro.scss";

const Intro = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [bottomCursor, setBottomCursor] = useState(false);
  const location = useLocation();
  const { runFadeOut, runPop } = useContext(AnimationContext);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const name = "Fernando Ramirez,";
    const title = "Fullstack Developer.";

    let i = 0;
    let j = 0;

    setInterval(() => {
      setTopText(name.slice(0, i + 1));
      i += 1;
    }, 60);

    setTimeout(() => {
      setInterval(() => {
        setBottomText(title.slice(0, j + 1));
        j += 1;
      }, 60);
    }, 2000);

    setTimeout(() => {
      setBottomCursor(true);
    }, 2000);

    setTimeout(() => {
      document.documentElement.style.overflowY = "auto";
    }, 8000);
  }, []);

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
