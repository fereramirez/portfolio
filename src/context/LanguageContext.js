import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
  en: {
    navbarButtons: ["Home", "About", "Projects", "Contact"],

    homeGreeting: "Hi, I'm ",
    homeTitle: "Frontend Developer.",
    homeDescription: "Self-taught person.",

    aboutTitle: "Learning to create.",
    aboutFirstParagraph:
      "I'm a versatile person specialized in JavaScript technologies, and a passionate in learning new ones.",
    aboutSecondParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem ametnumquam deserunt facere tempora eaque quo ad. Sapiente, a. Lorem ipsum  dolor sit amet consectetur adipisicing elit. Esse rem amet numquam deserunt facere tempora eaque quo ad. Sapiente, a.",
    aboutThirdParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem amet numquam deserunt facere tempora eaque quo ad. Sapiente, a.",
    aboutTechnologies: "Technologies I currently work with",

    projectsTitle: "Passion for build.",
    projectsProviderDescription:
      "eCommerce where each user can buy, publish, sell and write reviews. Group project applying MERN method.",
    projectsDogosDescription:
      "CRUD. My first project where I put all what I had learnt up to that moment.",
    projectsPortfolioDescription: "My portfolio.",

    contactTitle: "Let's talk.",
    contactLinks: "Get in touch via the links below",
    contactEmail: "or by emailing ",
  },
  es: {
    navbarButtons: ["Inicio", "Sobre mi", "Proyectos", "Contacto"],

    homeGreeting: "Hola, soy ",
    homeTitle: "Desarrollador Frontend.",
    homeDescription: "Autodidacta.",

    aboutTitle: "Aprendiendo a crear.",
    aboutFirstParagraph:
      "Soy una persona versátil, especializada en tecnologías JavaScript y apasionada por aprender nuevas herramientas.",
    aboutSecondParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem ametnumquam deserunt facere tempora eaque quo ad. Sapiente, a. Lorem ipsum  dolor sit amet consectetur adipisicing elit. Esse rem amet numquam deserunt facere tempora eaque quo ad. Sapiente, a.",
    aboutThirdParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem amet numquam deserunt facere tempora eaque quo ad. Sapiente, a.",
    aboutTechnologies: "Tecnologías con las que trabajo actualmente",

    projectsTitle: "Pasión por construir.",
    projectsProviderDescription:
      "eCommerce donde cada usuario puede comprar, publicar, vender y escribir reseñas. Proyecto grupal aplicando el método MERN.",
    projectsDogosDescription:
      "CRUD con consulta a api externa. Mi primer proyecto donde puse en práctica lo aprendido hasta el momento.",
    projectsPortfolioDescription: "Mi portfolio.",

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
