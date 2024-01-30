import { useContext, useState, useRef, useEffect } from "react";
import { sendForm } from "@emailjs/browser";
import { useForm } from "react-hook-form";

import LanguageContext from "../../context/LanguageContext";
import { ReactComponent as Spinner } from "../../assets/svg/spinner.svg";
import { ReactComponent as Warning } from "../../assets/svg/warning.svg";
import { ReactComponent as Brick } from "../../assets/svg/brick.svg";
import css from "./Form.module.css";

const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
} = process.env;

const initialMessageRemaining = 512;
const initialMessageDegrees = 0;

function Form() {
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
      className={`${css.formContainer} ${
        response === "success" ? css.containerHideForm : ""
      } ${showSuccess ? css.showSuccess : ""}`}
    >
      {!showSuccess ? (
        <>
          <div className={css.description}>{texts.form.title}</div>
          <form
            onSubmit={handleSubmit(sendEmail)}
            ref={formRef}
            className={css.form}
          >
            <span className={css.inputContainer}>
              <div className={css.fieldNameContainer}>
                {!errors.name ? (
                  <p className={css.fieldName}>{texts.form.name}</p>
                ) : (
                  <div className={css.error}>
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
                className={`${css.input} ${errors.name ? css.inputError : ""} ${
                  waitingResponse ? css.waiting : ""
                }`}
                {...register("name", {
                  required: true,
                  maxLength: 32,
                })}
              />
            </span>

            <span className={css.inputContainer}>
              <div className={css.fieldNameContainer}>
                {!errors.email ? (
                  <p className={css.fieldName}>Email</p>
                ) : (
                  <div className={css.error}>
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
                className={`${css.input} ${
                  errors.email ? css.inputError : ""
                } ${waitingResponse ? css.waiting : ""}`}
                {...register("email", {
                  required: true,
                  maxLength: 32,
                  pattern: emailRegex,
                })}
              />
            </span>

            <span className={css.inputContainer}>
              <div className={css.fieldNameContainer}>
                {!errors.message ? (
                  <p className={css.fieldName}>{texts.form.message}</p>
                ) : (
                  <div className={css.error}>
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
                className={`${css.input} ${
                  errors.message ? css.inputError : ""
                } ${waitingResponse ? css.waiting : ""}`}
                {...register("message", {
                  required: true,
                  maxLength: initialMessageRemaining,
                })}
              />

              {!waitingResponse && response !== "success" && (
                <div
                  className={css.radialProgress}
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
                    className={css.radialProgressBefore}
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

            <span className={`${css.inputContainer} ${css.submitContainer}`}>
              <div className={css.fieldNameContainer}>
                {response === "error" ? (
                  <div className={css.error}>
                    <Warning />
                    <p>{texts.form.responseError}</p>
                  </div>
                ) : (
                  <p className={css.errorPlaceholder}>hidden text</p>
                )}
              </div>

              <button
                type="submit"
                disabled={waitingResponse || Object.keys(errors).length}
                className={`${waitingResponse ? css.waiting : ""} ${
                  Object.keys(errors).length ? css.buttonError : ""
                }`}
              >
                {waitingResponse ? (
                  <Spinner className={css.spinner} />
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
        <div className={css.success}>
          <Brick />
          <span className={css.description}>{texts.form.responseSuccess}</span>
        </div>
      )}
    </div>
  );
}

export default Form;
