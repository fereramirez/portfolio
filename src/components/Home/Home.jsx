import { useState } from "react";
import Grid from "./Grid";

import css from "./Home.module.css";
import Title from "./Title";

const Home = () => {
  const [linkSelected, setLinkSelected] = useState("");

  return (
    <div className={`${css.container}`}>
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

      <Grid />

      <Title
        text={"projects"}
        setLinkSelected={setLinkSelected}
        linkSelected={linkSelected}
      />
      <Title
        text={"about"}
        setLinkSelected={setLinkSelected}
        linkSelected={linkSelected}
      />
      <Title
        text={"contact"}
        setLinkSelected={setLinkSelected}
        linkSelected={linkSelected}
      />

      {/* <div className={css.content3}>
        <p className={css.title}>
          <NavLink to={"/contact"}>{texts.homeDescription}</NavLink>
        </p>
        <div className={css.titleUnderline}></div>
      </div> */}
    </div>
  );
};

export default Home;
