import { useContext, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import Form from "./Form";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Gmail } from "../../assets/svg/gmail.svg";

import css from "./Contact.module.css";
import common from "../../App.module.css";

function Contact() {
  const { texts } = useContext(LanguageContext);
  const [textCopied, setTextCopied] = useState(false);

  const handleCopy = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      setTextCopied(true);
      return navigator.clipboard.writeText("fer.eze.ram@gmail.com");
    }
    return Promise.reject(new Error("The Clipboard API is not available."));
  };

  return (
    <div className={`${css.container} ${common.content}`}>
      <div className={css.title}>{texts.contact.title}</div>
      <div className={css.description}>{texts.contact.links}</div>

      <div className={css.linksContainer}>
        <a
          href="https://www.linkedin.com/in/fernando-e-ramirez/"
          target="_blank"
          rel="noreferrer"
          className={css.svgLinkedin}
        >
          <Linkedin />
        </a>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=fer.eze.ram@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={css.svgLinkedin}
        >
          <Gmail />
        </a>

        <a
          href="https://github.com/fereramirez"
          target="_blank"
          rel="noreferrer"
          className={css.svgGithub}
        >
          <Github />
        </a>
      </div>

      <div className={css.description}>
        {texts.contact.email}
        <span
          className={css.email}
          onClick={handleCopy}
          onKeyDown={handleCopy}
          role="button"
          tabIndex={0}
        >
          fer.eze.ram@gmail.com
          <span className={css.tooltip}>
            {textCopied ? texts.contact.copied : texts.contact.copy}
          </span>
        </span>
        ,
      </div>

      <Form />
    </div>
  );
}

export default Contact;
