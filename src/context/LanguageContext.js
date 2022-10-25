import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
  en: {
    homeLinks: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },

    /*  navbarButtons: ["Home", "About", "Projects", "Contact"], */
    navbarButtons: ["About", "Projects", "Contact"],

    homeGreeting: "Hi, I'm ",
    homeTitle: "Frontend Developer.",
    homeDescription: "Self-taught person.",

    aboutTitle: "Learning to build.",
    aboutIm: "I'm",
    aboutFirstParagraph:
      ", self-taught Web Developer, who found his passion for programming just for curiosity.",
    aboutSecondParagraph:
      "I'm a versatile person specialized in JavaScript technologies, passionate to learning new ones, self-demanding that goes beyond his capabilities to constantly surpass himself. I excel in frontend development but also I have backend development skills.",
    aboutThirdParagraph:
      "I'm looking for my first job experience in IT as Frontend Developer, in a company where I can keep learning and grow both professionally and personally.",
    aboutTechnologies: "Technologies I currently work with",

    projectsTitle: "Passion to create.",
    projectsProviderDescription:
      "eCommerce where each user can buy, publish, sell and write reviews. Group project applying MERN method.",
    projectsDogosDescription:
      "CRUD. My first project where I put all what I had learnt up to that moment.",
    projectsPortfolioDescription: "My portfolio.",

    contactTitle: "Let's talk.",
    contactLinks: "Get in touch via the following links",
    contactEmail: "by emailing ",
    contactForm: "or via the form below",

    form: {
      name: "Name",
      nameRequired: "Enter your name",
      nameLength: "Name must be at most 24 characters in length",

      emailRequired: "Enter your email address",
      emailLength: "Email must be at most 24 characters in length",
      emailPattern: "Enter a valid email",

      message: "Message",
      messageRequired: "Enter your message",
      messageLength: "Name must be at most 512 characters in length",

      submit: "Send",
      submitError: "There are errors",

      responseError: "There was an error, please try again.",
      responseSuccess:
        "Message sent successfully! I will get back to you soon.",
    },
  },
  es: {
    homeLinks: {
      projects: "Proyectos",
      about: "Sobre mi",
      contact: "Contacto",
    },

    navbarButtons: ["Sobre mi", "Proyectos", "Contacto"],
    /* navbarButtons: ["Inicio", "Sobre mi", "Proyectos", "Contacto"], */

    homeGreeting: "Hola, soy ",
    homeTitle: "Desarrollador Frontend.",
    homeDescription: "Autodidacta.",

    aboutTitle: "Aprendiendo a construir.",
    aboutIm: "Soy",

    aboutFirstParagraph:
      ", Desarrollador Web autodidacta, quien descubrió su pasión por la programación por curiosidad.",
    aboutSecondParagraph:
      "Soy una persona versátil, especializada en tecnologías JavaScript, apasionada por aprender a utilizar nuevas herramientas, autoexigente que va más allá de sus capacidades para superarse constantemente. Me destaco en el desarrollo frontend, aunque también poseo conocimientos sobre desarrollo backend.",
    aboutThirdParagraph:
      "Me encuentro en busca de mi primer trabajo en el mundo IT como Desarrollador Frontend en una empresa donde pueda seguir aprendiendo y creciendo tanto de forma profesional como personal.",
    aboutTechnologies: "Tecnologías con las que trabajo actualmente",

    projectsTitle: "Pasión por crear.",
    projectsProviderDescription:
      "eCommerce donde cada usuario puede comprar, publicar, vender y escribir reseñas. Proyecto grupal aplicando el método MERN.",
    projectsDogosDescription:
      "CRUD con consulta a api externa. Mi primer proyecto donde puse en práctica lo aprendido hasta el momento.",
    projectsPortfolioDescription: "Mi portfolio.",

    contactTitle: "Hablemos.",
    contactLinks: "Puedes contactarme mediante los siguientes links",
    contactEmail: "enviandome un email a ",
    contactForm: "o escribiéndome en el formulario de abajo",

    form: {
      name: "Nombre",
      nameRequired: "Ingresa tu nombre",
      nameLength: "El nombre debe tener 24 caracteres como máximo",

      emailRequired: "Ingresa tu email",
      emailLength: "El email debe tener 24 caracteres como máximo",
      emailPattern: "Ingresa un email válido",

      message: "Mensaje",
      messageRequired: "Ingresa un mensaje",
      messageLength: "El Mensaje debe tener 512 caracteres como máximo",

      submit: "Enviar",
      submitError: "Hay errores",

      responseError: "Hubo un error, vuelve a intentar.",
      responseSuccess:
        "¡Mensaje enviado con éxito! En breve me pondré en contacto contigo.",
    },
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
