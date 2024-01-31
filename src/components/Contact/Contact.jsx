import { useContext, useState } from "react";

import LanguageContext from "../../context/LanguageContext";
import Form from "./Form";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Gmail } from "../../assets/svg/gmail.svg";

import "../../App.css";
import "./Contact.scss";

const Contact = () => {
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
    <main className="contact-container content">
      <h1 className="title">{texts.contact.title}</h1>
      <div className="contact-text">{texts.contact.links}</div>

      <div className="contact-links-container">
        <a
          href="https://www.linkedin.com/in/fernando-e-ramirez/"
          target="_blank"
          rel="noreferrer"
          className="svg-linkedin"
        >
          <Linkedin />
        </a>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=fer.eze.ram@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="svg-linkedin"
        >
          <Gmail />
        </a>

        <a
          href="https://github.com/fereramirez"
          target="_blank"
          rel="noreferrer"
          className="svg-github"
        >
          <Github />
        </a>
      </div>

      <div className="contact-text">
        {texts.contact.email}
        <span
          className="email-button"
          onClick={handleCopy}
          onKeyDown={handleCopy}
          role="button"
          tabIndex={0}
        >
          fer.eze.ram@gmail.com
          <span className="tooltip">
            {textCopied ? texts.contact.copied : texts.contact.copy}
          </span>
          {/* //! VOLVER A VER ponerle z index -1 */}
        </span>
        ,
      </div>

      <Form />
    </main>
  );
};

export default Contact;
