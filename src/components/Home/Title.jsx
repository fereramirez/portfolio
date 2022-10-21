import { useContext } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import LanguageContext from "../../context/LanguageContext";
import "./Title.css";

const Title = ({ text, setLinkSelected, linkSelected }) => {
  const { texts } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectedLink = () => {
    setLinkSelected(text);

    setTimeout(() => {
      navigate(`/${text}`);
    }, 2500);
  };

  return (
    <div
      onClick={handleSelectedLink}
      className={`title-container-link ${
        linkSelected === text
          ? "title-container-link-selected"
          : linkSelected !== ""
          ? "title-container-link-not-selected"
          : "title-container-link-selectable"
      }`}
    >
      <div className="title-container">
        <h1 className="title">{texts.homeLinks[text]}</h1>
      </div>

      <div
        className={`title-background-hover ${
          linkSelected !== "" && linkSelected !== text
            ? "title-background-cover-link"
            : "title-background-hover-active"
        }`}
      ></div>

      <div className="title-hover-container">
        <h1 className="title-hover">{texts.homeLinks[text]}</h1>
      </div>
    </div>
  );
};

export default Title;
