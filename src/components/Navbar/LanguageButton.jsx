import useLanguageContext from "../../hooks/useLanguageContext";

import "./LanguageButton.scss";

const LanguageButton = () => {
  const { language, handleLanguage } = useLanguageContext();

  return (
    <>
      <div
        className="language-button-container"
        onClick={() => handleLanguage(language === "en" ? "es" : "en")}
      >
        <span className="language-current">{language.toUpperCase()}</span>
        <span className="language-hover">
          {language === "en" ? "ES" : "EN"}
        </span>
      </div>

      <div className="language-mobile-button-container">
        <div
          className="language-mobile-button"
          onClick={() => handleLanguage(language === "en" ? "es" : "en")}
        >
          <span className="language-mobile-button-current">
            {language.toUpperCase()}
          </span>

          <span className="language-mobile-button-hover">
            {language === "en" ? "ES" : "EN"}
          </span>
        </div>
      </div>
    </>
  );
};

export default LanguageButton;
