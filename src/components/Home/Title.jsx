import { useLocation, NavLink } from "react-router-dom";
import "./Title.css";

const Title = ({ text, to }) => {
  const location = useLocation();

  return (
    <NavLink
      to={to}
      className={`title-container-link${
        location.pathname === "/" + text
          ? " title-container-link-selected"
          : location.pathname !== "/"
          ? " title-container-link-not-selected"
          : " title-container-link-home"
      }`}
    >
      <div className="title-container">
        <h1 className="title">{text}</h1>
      </div>

      <div
        className={`title-background-hover ${
          location.pathname !== "/" + text && location.pathname !== "/"
            ? "title-background-cover-link"
            : "title-background-hover-active"
        }`}
      ></div>

      <div className="title-hover-container">
        <h1 className="title-hover">{text}</h1>
      </div>
    </NavLink>
  );
};

export default Title;
