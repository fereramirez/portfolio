import { useContext, useState, useRef, useEffect } from "react";
import { sendForm } from "@emailjs/browser";
import { useForm } from "react-hook-form";
import LanguageContext from "../../context/LanguageContext";
import { ReactComponent as Spinner } from "../../assets/svg/spinner.svg";
import { ReactComponent as Warning } from "../../assets/svg/warning.svg";
import css from "./Form.module.css";
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
  const [messageRemaining, setMessageRemaining] = useState(
    initialMessageRemaining
  );
  const [messageDegrees, setMessageDegrees] = useState(initialMessageDegrees);
  const formRef = useRef();

  const emailRegex = /^[\w-.]+@([\w-])+[.\w-]*$/i;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const watchMessage = watch("message");

  useEffect(() => {
    setMessageRemaining(
      watchMessage
        ? initialMessageRemaining - watchMessage.length
        : initialMessageRemaining
    ); //! ver aca

    const degrees = watchMessage
      ? (watchMessage.length * 360) / initialMessageRemaining
      : 0;
    setMessageDegrees(degrees > 360 ? 360 : degrees);
  }, [watchMessage]);

  const sendEmail = async () => {
    setWaitingResponse(true);
    try {
      const { text } = await sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (text === "OK") {
        console.log("exito");
        setResponse("success");
        //! ver aca
        //reset();
      }
    } catch (error) {
      setResponse("error"); //! ver aca
      console.log("tiro error", error);
    } finally {
      setWaitingResponse(false);
    }
  };

  return (
    <div className={css.container}>
      <form
        onSubmit={handleSubmit(sendEmail)}
        ref={formRef}
        className={css.form}
      >
        <span className={css.inputContainer}>
          <div className={css.titleContainer}>
            {!errors.name ? (
              <p className={css.title}>{texts.form.name}</p>
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
            disabled={waitingResponse}
            autoComplete="off"
            className={css.input}
            {...register("name", {
              required: true,
              maxLength: 24,
            })}
          />
        </span>

        <span className={css.inputContainer}>
          <div className={css.titleContainer}>
            {!errors.email ? (
              <p className={css.title}>Email</p>
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
            disabled={waitingResponse}
            autoComplete="off"
            className={css.input}
            {...register("email", {
              required: true,
              maxLength: 24,
              pattern: emailRegex,
            })}
          />
        </span>

        <span className={css.inputContainer}>
          <div className={css.titleContainer}>
            {!errors.message ? (
              <p className={css.title}>{texts.form.message}</p>
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
            disabled={waitingResponse}
            autoComplete="off"
            className={css.input}
            {...register("message", {
              required: true,
              maxLength: initialMessageRemaining,
            })}
          />

          <div
            className={css.radialProgress}
            /* style={{
              background: `conic-gradient(${
                 messageRemaining <= 0
                  ? "red"
                  : messageRemaining < initialMessageRemaining / 4
                  ? "rgb(255, 187, 0)"
                  : "green"
               } ${messageDegrees}deg, white 0deg)`,
            }} */
            style={{
              background: `${
                messageRemaining >= 0
                  ? messageRemaining === 0
                    ? "conic-gradient(red " +
                      messageDegrees +
                      "deg, var(--font-color) 0deg)"
                    : messageRemaining < initialMessageRemaining / 4
                    ? "conic-gradient(rgb(255, 187, 0) " +
                      messageDegrees +
                      "deg, var(--font-color) 0deg)"
                    : "conic-gradient(green " +
                      messageDegrees +
                      "deg, var(--font-color) 0deg)"
                  : "var(--background-color)"
              }`,
            }}
          >
            <div
              className={css.radialProgressBefore}
              style={{
                backgroundColor: `${
                  messageRemaining > 0
                    ? "var(--font-color)"
                    : "var(--background-color)"
                }`,
              }}
            ></div>

            <span
              style={{
                color: `${
                  messageRemaining <= 0 ? "red" : "var(--background-color)"
                }`,
              }}
            >
              {messageRemaining}
            </span>
          </div>
        </span>

        <span className={css.inputContainer}>
          {response !== "error" && (
            <p className={css.errorPlaceholder}>hidden text</p>
          )}

          <button
            type="submit"
            disabled={waitingResponse || Object.keys(errors).length}
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
    </div>
  );
};

export default Form;
