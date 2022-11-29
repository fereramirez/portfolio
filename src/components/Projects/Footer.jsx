import { ReactComponent as Github } from "../../assets/svg/github.svg";

import css from "./Footer.module.css";

function Footer() {
  return (
    <div className={css.container}>
      <a
        href="https://github.com/fereramirez/portfolio"
        target="_blank"
        rel="noreferrer"
        className={css.link}
      >
        Portfolio Repo
        <div className={css.svgContainer}>
          <Github />
        </div>
      </a>
    </div>
  );
}

export default Footer;
