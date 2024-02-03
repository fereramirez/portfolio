import { useForm } from "react-hook-form";

import useLanguageContext from "../../hooks/useLanguageContext";
import useSubmit from "../../hooks/useSubmit";
import useValidations from "../../hooks/useValidations";
import InputContainer from "./InputContainer";
import TextAreaContainer from "./TextAreaContainer";
import { ReactComponent as Spinner } from "../../assets/svg/spinner.svg";
import { ReactComponent as Warning } from "../../assets/svg/warning.svg";
import { ReactComponent as Brick } from "../../assets/svg/brick.svg";

import "./Form.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const { texts } = useLanguageContext();
  const { sendEmail, waitingResponse, response, showSuccess } =
    useSubmit(reset);
  const { nameValidation, emailValidation, messageValidation } =
    useValidations();

  return (
    <div
      className={`form-container ${
        response === "success" ? "container-hide-form" : ""
      } ${showSuccess ? "show-success" : ""}`}
    >
      {!showSuccess ? (
        <>
          <div className="form-text">{texts.form.title}</div>

          <form onSubmit={handleSubmit(sendEmail)} className="form">
            <InputContainer
              label={texts.form.name.label}
              register={register("name", nameValidation)}
              error={errors.name}
              isLoading={waitingResponse}
              disabled={waitingResponse || response === "success"}
            />

            <InputContainer
              label={texts.form.email.label}
              register={register("email", emailValidation)}
              error={errors.email}
              isLoading={waitingResponse}
              disabled={waitingResponse || response === "success"}
            />

            <TextAreaContainer
              label="Message"
              register={register("message", messageValidation)}
              error={errors.message}
              isLoading={waitingResponse}
              disabled={waitingResponse || response === "success"}
              name="message"
              watch={watch}
              minLength={messageValidation.minLength.value}
              maxLength={messageValidation.maxLength.value}
            />

            <span className="input-container submit-container">
              <div className="field-name-container">
                {response === "error" ? (
                  /* VOLVER A VER crear ErrorMessage y mover clase error-message */
                  <div className="error-message">
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
