import {
  SECTION_ABOUT,
  SECTION_PROJECTS,
  SECTION_CONTACT,
} from "../utils/constants";

const translations = {
  en: {
    home: {
      [SECTION_ABOUT]: "About",
      [SECTION_PROJECTS]: "Projects",
      [SECTION_CONTACT]: "Contact",
    },

    /*  navbarButtons: ["Home", "About", "Projects", "Contact"], */
    navbarButtons: ["About", "Projects", "Contact"],

    about: {
      title: "Learning to build.",
      im: "I'm",
      firstParagraph:
        ", self-taught Web Developer, who found his passion for programming just for curiosity.",
      secondParagraph:
        "I'm a versatile person specialized in JavaScript technologies, passionate to learning new ones, self-demanding that goes beyond his capabilities to constantly surpass himself. I excel in frontend development but also I have backend development skills.",
      thirdParagraph:
        "I'm looking for my first job experience in IT as Fullstack Developer, in a company where I can keep learning and grow both professionally and personally.",
      technologies: "Technologies I currently work with",
      resume: "Here is my Resume.",
    },

    projects: {
      title: "Passion to create.",
      nafta:
        "A small project about a fake production agency. It was an excuse to start with TypeScript, Next.js and Sass.",
      provider:
        "eCommerce where each user can buy, publish, sell and write reviews. Group project applying MERN method.",
      dogos:
        "CRUD. My first project where I put all what I had learnt up to that moment.",
      portfolio: "My portfolio.",
    },

    contact: {
      title: "Let's talk.",
      links: "Get in touch via the following links",
      email: "by emailing ",
      copy: "Click to copy",
      copied: "Copied to clipboard!",
    },

    form: {
      title: "or via the form below",

      name: {
        label: "Name",
        required: "Enter your Name",
        pattern: "Enter a valid Name",
        minLength: "Name must be 5 characters length at least",
        maxLength: "Name must have less than 50 characters",
      },

      email: {
        label: "Email",
        required: "Enter your Email",
        minLength: "Email must be 6 characters length at least",
        maxLength: "Email must have less than 65 characters",
        validate: "Enter a valid Email",
      },

      message: {
        label: "Message",
        required: "Enter your message",
        minLength: "This field must be 20 characters length at least",
        maxLength: "This field must have less than 500 characters",
      },

      submit: "Send",
      submitError: "There are errors",

      responseError: "There was an error, please try again.",
      responseSuccess:
        "Message sent successfully! I will get back to you soon.",
    },
  },
  es: {
    home: {
      [SECTION_ABOUT]: "Sobre mi",
      [SECTION_PROJECTS]: "Proyectos",
      [SECTION_CONTACT]: "Contacto",
    },

    navbarButtons: ["Sobre mi", "Proyectos", "Contacto"],
    /* navbarButtons: ["Inicio", "Sobre mi", "Proyectos", "Contacto"], */

    about: {
      title: "Aprendiendo a construir.",
      im: "Soy",
      firstParagraph:
        ", Desarrollador Web autodidacta, quien descubrió su pasión por la programación por curiosidad.",
      secondParagraph:
        "Soy una persona versátil, especializada en tecnologías JavaScript, apasionada por aprender a utilizar nuevas herramientas, autoexigente que va más allá de sus capacidades para superarse constantemente. Me destaco en el desarrollo frontend, aunque también poseo conocimientos sobre desarrollo backend.",
      thirdParagraph:
        "Me encuentro en busca de mi primer trabajo en el mundo IT como Desarrollador Fullstack en una empresa donde pueda seguir aprendiendo y creciendo tanto de forma profesional como personal.",
      technologies: "Tecnologías con las que trabajo actualmente",
      resume: "Aquí puedes ver mi CV.",
    },

    projects: {
      title: "Pasión por crear.",
      nafta:
        "Un proyecto pequeño sobre una productora audivisual falsa. Fue una excusa para empezar con TypeScript, Next.js y Sass.",
      provider:
        "eCommerce donde cada usuario puede comprar, publicar, vender y escribir reseñas. Proyecto grupal aplicando el método MERN.",
      dogos:
        "CRUD con consulta a api externa. Mi primer proyecto donde puse en práctica lo aprendido hasta el momento.",
      portfolio: "Mi portfolio.",
    },

    contact: {
      title: "Hablemos.",
      links: "Puedes contactarme mediante los siguientes links",
      email: "enviándome un email a ",
      copy: "Click para copiar",
      copied: "¡Copiado al portapapeles!",
    },

    form: {
      title: "o escribiéndome en el formulario de abajo",

      name: {
        label: "Nombre",
        required: "Ingresa tu Nombre",
        pattern: "Ingresa un Nombre válido",
        minLength: "El Nombre debe tener al menos 5 caracteres",
        maxLength: "El Nombre debe tener 50 caracteres como máximo",
      },

      email: {
        label: "Email",
        required: "Ingresa tu Email",
        minLength: "El Email debe tener al menos 6 caracteres",
        maxLength: "El Email debe tener 65 caracteres como máximo",
        validate: "Ingresa un email válido",
      },

      message: {
        label: "Mensaje",
        required: "Ingresa tu Mensaje",
        minLength: "El Mensaje debe tener al menos 20 caracteres",
        maxLength: "El Mensaje debe tener 500 caracteres como máximo",
      },

      submit: "Enviar",
      submitError: "Hay errores",

      responseError: "Hubo un error, vuelve a intentar.",
      responseSuccess:
        "¡Mensaje enviado con éxito! En breve me pondré en contacto contigo.",
    },
  },
};

export { translations };
