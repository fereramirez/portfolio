import { ReactComponent as Github } from "../../assets/svg/github.svg";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footerContainer}>
      <a
        href="https://github.com/fereramirez/portfolio"
        target="_blank"
        rel="noreferrer"
        className={css.footerLink}
      >
        Portfolio Repo
        <div className={css.svgContainer}>
          <Github />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
