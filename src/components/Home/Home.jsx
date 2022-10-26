import { useState, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Grid from "../common/Grid";
import AnimationContext from "../../context/AnimationContext";

import css from "./Home.module.css";
/* import Title from "./Title"; */
import Title from "./Title";

const Home = (/* { setRunFadeOut } */) => {
  //const [linkSelected, setLinkSelected] = useState("");
  const location = useLocation();
  const { linkSelected } = useContext(AnimationContext);

  /* setTimeout(() => {
    setLinkSelected("");
  }, 3000); */

  return (
    <>
      <div
        className={`${css.container} ${
          location.pathname !== "/" ? css.notHome : ""
        }`}
      >
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

        {location.pathname === "/" && (
          <>
            <Grid position={"left"} />

            <>
              <Title
                text={"projects"}
                /* setLinkSelected={setLinkSelected}
                linkSelected={linkSelected}
                setRunFadeOut={setRunFadeOut} */
              />
              <Title
                text={"about"}
                /* setLinkSelected={setLinkSelected}
                linkSelected={linkSelected}
                setRunFadeOut={setRunFadeOut} */
              />
              <Title
                text={"contact"}
                /* setLinkSelected={setLinkSelected}
                linkSelected={linkSelected}
                setRunFadeOut={setRunFadeOut} */
              />
            </>

            <div
              className={`${css.totalCover} ${
                linkSelected !== "" ? css.totalCoverActive : ""
              }`}
            >
              <Grid color={"purple"} position={"right"} />
            </div>
          </>
        )}

        {/* <div className={css.content3}>
        <p className={css.title}>
        <NavLink to={"/contact"}>{texts.homeDescription}</NavLink>
        </p>
        <div className={css.titleUnderline}></div>
      </div> */}
      </div>
      <Outlet />
    </>
  );
};

export default Home;
