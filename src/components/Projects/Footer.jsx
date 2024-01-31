import { ReactComponent as Github } from "../../assets/svg/github.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <a
        href="https://github.com/fereramirez/portfolio"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        Portfolio Repo
        <div className="footer-svg-container">
          <Github />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
