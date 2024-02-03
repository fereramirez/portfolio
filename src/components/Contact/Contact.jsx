import useLanguageContext from "../../hooks/useLanguageContext";
import Form from "./Form";
import { useClipboard } from "../../hooks/useClipboard";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Gmail } from "../../assets/svg/gmail.svg";

import "../../App.css";
import "./Contact.scss";

const Contact = () => {
  const { texts } = useLanguageContext();

  const { copyToClipboard, textCopied } = useClipboard();

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
          onClick={() => copyToClipboard("fer.eze.ram@gmail.com")}
          onKeyDown={() => copyToClipboard("fer.eze.ram@gmail.com")}
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
