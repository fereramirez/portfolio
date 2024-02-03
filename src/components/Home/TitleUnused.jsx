import { useNavigate } from "react-router-dom";

import useLanguageContext from "../../hooks/useLanguageContext";
// import Grid from "../common/Grid";

import "./TitleUnused.css";

const Title = ({ text, setLinkSelected, linkSelected }) => {
  const { texts } = useLanguageContext();
  const navigate = useNavigate();

  const handleSelectedLink = () => {
    setLinkSelected(text);

    setTimeout(() => {
      navigate(`/${text}`);
    }, 2000);
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
      >
        {/*  <Grid active={true} /> */}
      </div>

      {/* <div className="title-hover-container">
        <h1 className="title-hover">{texts.homeLinks[text]}</h1>
      </div> */}
    </div>
  );
};

export default Title;
