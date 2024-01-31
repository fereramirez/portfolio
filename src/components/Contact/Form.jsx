import { useContext, useState, useRef, useEffect } from "react";
import { sendForm } from "@emailjs/browser";
import { useForm } from "react-hook-form";

import useValidations from "../../helpers/useValidations";
import LanguageContext from "../../context/LanguageContext";
import InputContainer from "./InputContainer";
import { ReactComponent as Spinner } from "../../assets/svg/spinner.svg";
import { ReactComponent as Warning } from "../../assets/svg/warning.svg";
import { ReactComponent as Brick } from "../../assets/svg/brick.svg";

import "./Form.scss";
import TextAreaContainer from "./TextAreaContainer";

//! VOLVER A VER agregar config para exportar .env
const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
} = process.env;

const initialMessageRemaining = 512;
const initialMessageDegrees = 0;

const Form = () => {
  const { texts } = useContext(LanguageContext);
  const [waitingResponse, setWaitingResponse] = useState(false);
  const [response, setResponse] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [messageRemaining, setMessageRemaining] = useState(
    initialMessageRemaining,
  );
  const [messageDegrees, setMessageDegrees] = useState(initialMessageDegrees);
  // const [scrollHeight, setScrollHeight] = useState(null);
  const formRef = useRef();
  const messageRef = useRef();
  const { nameValidation, emailValidation, messageValidation } =
    useValidations();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const watchMessage = watch("message");

  // const handleResize = () => {
  //   const textarea = document.getElementById("message-text-area");

  //   /*  if (scrollHeight !== textarea.scrollHeight) {
  //     textarea.style.height = textarea.scrollHeight + 5 + "px";
  //     textarea.scrollTop = textarea.scrollHeight;
  //   }

  //   setScrollHeight(textarea.scrollHeight); */

  //   textarea.scrollTop = textarea.scrollHeight;
  // };

  // useEffect(() => {
  //   setMessageRemaining(
  //     watchMessage
  //       ? initialMessageRemaining - watchMessage.length
  //       : initialMessageRemaining,
  //   );

  //   const degrees = watchMessage
  //     ? (watchMessage.length * 360) / initialMessageRemaining
  //     : 0;
  //   setMessageDegrees(degrees > 360 ? 360 : degrees);

  //   handleResize();
  //   // eslint-disable-next-line
  // }, [watchMessage]);

  const sendEmail = async () => {
    setWaitingResponse(true);
    setResponse(null);

    try {
      const { text } = await sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        REACT_APP_EMAILJS_PUBLIC_KEY,
      );

      if (text === "OK") {
        setResponse("success");
        setTimeout(() => {
          setShowSuccess(true);
        }, 800);

        reset();
      }
    } catch (error) {
      setResponse("error");
    } finally {
      setWaitingResponse(false);
    }
  };

  return (
    <div
      className={`form-container ${
        response === "success" ? "container-hide-form" : ""
      } ${showSuccess ? "show-success" : ""}`}
    >
      {!showSuccess ? (
        <>
          <div className="form-text">{texts.form.title}</div>
          <form
            onSubmit={handleSubmit(sendEmail)}
            ref={formRef}
            className="form"
          >
            <InputContainer
              register={register("name", nameValidation)}
              label={texts.form.name.label}
              isLoading={waitingResponse}
              error={errors.name}
              disabled={waitingResponse || response === "success"}
            />

            <InputContainer
              register={register("email", emailValidation)}
              label={texts.form.email.label}
              isLoading={waitingResponse}
              error={errors.email}
              disabled={waitingResponse || response === "success"}
            />

            <TextAreaContainer
              register={register("message", messageValidation)}
              name="message"
              label="Message"
              error={errors.message}
              isLoading={waitingResponse}
              disabled={waitingResponse || response === "success"}
              watch={watch}
              minLength={messageValidation.minLength.value}
              maxLength={messageValidation.maxLength.value}
            />

            <span className="input-container submit-container">
              <div className="field-name-container">
                {response === "error" ? (
                  <div className="error">
                    <Warning />
                    <p>{texts.form.responseError}</p>
                  </div>
                ) : (
                  <p className="error-placeholder">hidden text</p>
                )}
              </div>

              <button
                type="submit"
                disabled={waitingResponse || Object.keys(errors).length}
                className={`${waitingResponse ? "waiting" : ""} ${
                  Object.keys(errors).length ? "button-error" : ""
                }`}
              >
                {waitingResponse ? (
                  <Spinner className="spinner" />
                ) : Object.keys(errors).length ? (
                  texts.form.submitError
                ) : (
                  texts.form.submit
                )}
              </button>
            </span>
          </form>
        </>
      ) : (
        <div className="success">
          <Brick />
          <span className="form-text">{texts.form.responseSuccess}</span>
        </div>
      )}
    </div>
  );
};

export default Form;
