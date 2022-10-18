import css from "./Home.module.css";
import common from "../../App.module.css";

const Home = () => {
  return (
    <div className={`${css.container} ${common.content}`}>
      <p className={css.greeting}>
        Hi, I'm <span className={css.name}>Fernando</span>.
      </p>
      <p className={css.title}>Frontend developer.</p>
      <p className={css.title}>Self-taught Person.</p>
    </div>
  );
};

export default Home;
