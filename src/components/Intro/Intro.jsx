import React, { useEffect, useState, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AnimationContext from "../../context/AnimationContext";

import Grid from "../common/Grid";

import css from "./Intro.module.css";
import "./Intro.css";

const Intro = (/* { runFadeOut } */) => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [bottomCursor, setBottomCursor] = useState(false);
  const location = useLocation();
  const { runFadeOut, runPop } = useContext(AnimationContext);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const name = "Fernando Ramirez,";
    const title = "Frontend Developer.";

    let i = 0;
    let j = 0;

    setInterval(() => {
      setTopText(name.slice(0, i + 1));
      i++;
    }, 60);

    setTimeout(() => {
      setInterval(() => {
        setBottomText(title.slice(0, j + 1));
        j++;
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
        className={`${css.container}`}
        style={{
          /* animationName: `${
            location.pathname !== "/" && runFadeOut ? "fadeOut" : "pop"
          }`, */
          animationName: `${
            location.pathname !== "/" && runFadeOut
              ? "fadeOut"
              : runPop
              ? "pop"
              : "fadeOut"
          }`,
          animationDuration: "2s",
          animationDelay: `${location.pathname !== "/" ? "7s" : "7s"}`,
          animationFillMode: "forwards",
        }}
      >
        <Grid />
        <div className={css.textContainerOuter}>
          <div className={css.textContainer}>
            <p>{topText}</p>
            <div className={css.topCursor}></div>
          </div>

          <div className={css.textContainer}>
            <p>{bottomText}</p>
            <div className={css.cursorWriting}></div>
            <div
              className={`${css.bottomCursor} ${
                bottomCursor ? css.showBottomCursor : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Intro;
