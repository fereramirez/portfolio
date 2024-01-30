import { useContext, useState, useRef, useEffect } from "react";
import { sendForm } from "@emailjs/browser";
import { useForm } from "react-hook-form";

import LanguageContext from "../../context/LanguageContext";
import { ReactComponent as Spinner } from "../../assets/svg/spinner.svg";
import { ReactComponent as Warning } from "../../assets/svg/warning.svg";
import { ReactComponent as Brick } from "../../assets/svg/brick.svg";

import "./Form.scss";

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

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const watchMessage = watch("message");

  const handleResize = () => {
    const textarea = document.getElementById("message-text-area");

    /*  if (scrollHeight !== textarea.scrollHeight) {
      textarea.style.height = textarea.scrollHeight + 5 + "px";
      textarea.scrollTop = textarea.scrollHeight;
    }

    setScrollHeight(textarea.scrollHeight); */

    textarea.scrollTop = textarea.scrollHeight;
  };

  useEffect(() => {
    setMessageRemaining(
      watchMessage
        ? initialMessageRemaining - watchMessage.length
        : initialMessageRemaining,
    );

    const degrees = watchMessage
      ? (watchMessage.length * 360) / initialMessageRemaining
      : 0;
    setMessageDegrees(degrees > 360 ? 360 : degrees);

    handleResize();
    // eslint-disable-next-line
  }, [watchMessage]);

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
            <span className="input-container">
              <div className="field-name-container">
                {!errors.name ? (
                  <p className="field-name">{texts.form.name}</p>
                ) : (
                  <div className="error">
                    <Warning />
                    {errors.name?.type === "required" && (
                      <span>{texts.form.nameRequired}</span>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <span>{texts.form.nameLength}</span>
                    )}
                  </div>
                )}
              </div>

              <input
                type="text"
                disabled={waitingResponse || response === "success"}
                autoComplete="off"
                className={`input ${errors.name ? "input-error" : ""} ${
                  waitingResponse ? "waiting" : ""
                }`}
                {...register("name", {
                  required: true,
                  maxLength: 32,
                })}
              />
            </span>

            <span className="input-container">
              <div className="field-name-container">
                {!errors.email ? (
                  <p className="field-name">Email</p>
                ) : (
                  <div className="error">
                    <Warning />
                    {errors.email?.type === "required" && (
                      <p>{texts.form.emailRequired}</p>
                    )}
                    {errors.email?.type === "maxLength" && (
                      <p>{texts.form.emailLength}</p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p>{texts.form.emailPattern}</p>
                    )}
                  </div>
                )}
              </div>

              <input
                type="text"
                disabled={waitingResponse || response === "success"}
                autoComplete="off"
                className={`input ${errors.email ? "input-error" : ""} ${
                  waitingResponse ? "waiting" : ""
                }`}
                {...register("email", {
                  required: true,
                  maxLength: 32,
                  pattern: emailRegex,
                })}
              />
            </span>

            <span className="input-container">
              <div className="field-name-container">
                {!errors.message ? (
                  <p className="field-name">{texts.form.message}</p>
                ) : (
                  <div className="error">
                    <Warning />
                    {errors.message?.type === "required" && (
                      <p>{texts.form.messageRequired}</p>
                    )}
                    {errors.message?.type === "maxLength" && (
                      <p>{texts.form.messageLength}</p>
                    )}
                  </div>
                )}
              </div>

              <textarea
                disabled={waitingResponse || response === "success"}
                autoComplete="off"
                ref={messageRef}
                id="message-text-area"
                className={`input ${errors.message ? "input-error" : ""} ${
                  waitingResponse ? "waiting" : ""
                }`}
                {...register("message", {
                  required: true,
                  maxLength: initialMessageRemaining,
                })}
              />

              {!waitingResponse && response !== "success" && (
                <div
                  className="radial-progress"
                  style={{
                    background: `${
                      messageRemaining >= 0
                        ? messageRemaining === 0
                          ? "conic-gradient(red " +
                            messageDegrees +
                            "deg, white 0deg)"
                          : messageRemaining < initialMessageRemaining / 4
                          ? "conic-gradient(rgb(255, 187, 0) " +
                            messageDegrees +
                            "deg, white 0deg)"
                          : "conic-gradient(green " +
                            messageDegrees +
                            "deg, white 0deg)"
                        : "white"
                    }`,
                  }}
                >
                  <div
                    className="radial-progress-before"
                    style={{
                      backgroundColor: `${
                        messageRemaining > 0 ? "white" : "white"
                      }`,
                    }}
                  />

                  <span
                    style={{
                      color: `${messageRemaining <= 0 ? "red" : "#000000"}`,
                    }}
                  >
                    {messageRemaining}
                  </span>
                </div>
              )}
            </span>

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
