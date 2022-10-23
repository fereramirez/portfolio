import React, { useEffect, useState } from "react";
import Grid from "../Home/Grid";

import css from "./Intro.module.css";

const Intro = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [bottomCursor, setBottomCursor] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div className={css.container}>
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
  );
};

export default Intro;
