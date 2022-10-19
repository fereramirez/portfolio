import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
  en: {
    navbarButtons: ["Home", "About"],

    homeGreeting: "Hi, I'm ",
    homeTitle: "Frontend Developer.",
    homeDescription: "Self-taught person.",

    aboutTitle: "Learning to create excellence.",
    aboutFirstParagraph:
      "I'm a versatile person specialized in JavaScript technologies, and a passionate in learning new ones.",
    aboutSecondParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem ametnumquam deserunt facere tempora eaque quo ad. Sapiente, a. Lorem ipsum  dolor sit amet consectetur adipisicing elit. Esse rem amet numquam deserunt facere tempora eaque quo ad. Sapiente, a.",
    aboutThirdParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem amet numquam deserunt facere tempora eaque quo ad. Sapiente, a.",
    aboutTechnologies: "Technologies I currently work with",

    contactTitle: "Let's talk.",
    contactLinks: "Get in touch via the links below",
    contactEmail: "or by emailing ",
  },
  es: {
    navbarButtons: ["Home", "Sobre mi"],

    homeGreeting: "Hola, soy ",
    homeTitle: "Desarrollador Frontend.",
    homeDescription: "Autodidacta.",

    aboutTitle: "Aprendiendo a crear excelencia.",
    aboutFirstParagraph:
      "Soy una persona versátil, especializada en tecnologías JavaScript y apasionada por aprender nuevas herramientas.",
    aboutSecondParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem ametnumquam deserunt facere tempora eaque quo ad. Sapiente, a. Lorem ipsum  dolor sit amet consectetur adipisicing elit. Esse rem amet numquam deserunt facere tempora eaque quo ad. Sapiente, a.",
    aboutThirdParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem amet numquam deserunt facere tempora eaque quo ad. Sapiente, a.",
    aboutTechnologies: "Tecnologías con las que trabajo actualmente",

    contactTitle: "Hablemos.",
    contactLinks: "Contáctame mediante los links de abajo",
    contactEmail: "o envíame un email a ",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (language) => {
    if (language === "es" || language === "en") {
      setLanguage(language);
      setTexts(translations[language]);
    }
  };

  const data = { language, texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
