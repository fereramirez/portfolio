import { useContext, useState, useRef } from "react";
import { sendForm } from "@emailjs/browser";
import { useForm } from "react-hook-form";
import LanguageContext from "../../context/LanguageContext";
import css from "./Form.module.css";
const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
} = process.env;

const Form = () => {
  const { texts } = useContext(LanguageContext);
  const [waitingResponse, setWaitingResponse] = useState(false);
  const formRef = useRef();

  const emailRegex = /^[\w-.]+@([\w-])+[.\w-]*$/i;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const sendEmail = async () => {
    setWaitingResponse(true);
    try {
      await sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        REACT_APP_EMAILJS_PUBLIC_KEY
      );

      reset();
    } catch (error) {
      console.log("tiro error");
      console.log(error);
    } finally {
      setWaitingResponse(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
        <>
          {!errors.name && <p className={css.inputTitle}>{texts.form.name}</p>}
          {errors.name?.type === "required" && (
            <p className={css.error}>{texts.form.nameRequired}</p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className={css.error}>{texts.form.nameLength}</p>
          )}
        </>
        <input
          type="text"
          //name="user_name"
          //placeholder={texts.form.name}
          autoComplete="off"
          {...register("name", {
            required: true,
            maxLength: 24,
          })}
        />

        <>
          {!errors.email && <p className={css.inputTitle}>Email</p>}
          {errors.email?.type === "required" && (
            <p className={css.error}>{texts.form.emailRequired}</p>
          )}
          {errors.email?.type === "maxLength" && (
            <p className={css.error}>{texts.form.emailLength}</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className={css.error}>{texts.form.emailPattern}</p>
          )}
        </>
        <input
          type="text"
          //name="user_email"
          //placeholder="Email"
          autoComplete="off"
          {...register("email", {
            required: true,
            maxLength: 24,
            pattern: emailRegex,
          })}
        />

        <>
          {!errors.message && (
            <p className={css.inputTitle}>{texts.form.message}</p>
          )}
          {errors.message?.type === "required" && (
            <p className={css.error}>{texts.form.messageRequired}</p>
          )}
          {errors.message?.type === "maxLength" && (
            <p className={css.error}>{texts.form.messageLength}</p>
          )}
        </>
        <input
          type="text"
          //name="message"
          //placeholder={texts.form.message}
          autoComplete="off"
          {...register("message", {
            required: true,
            maxLength: 512,
          })}
        />

        <input
          type="submit"
          value={texts.form.submit}
          disabled={waitingResponse}
        />
      </form>
    </div>
  );
};

export default Form;
