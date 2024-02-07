import { useForm } from "react-hook-form";

import useLanguageContext from "../../hooks/useLanguageContext";
import useSubmit from "../../hooks/useSubmit";
import useValidations from "../../hooks/useValidations";
import InputContainer from "./InputContainer";
import TextAreaContainer from "./TextAreaContainer";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
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
              error={errors.name?.message}
              isLoading={waitingResponse}
              disabled={waitingResponse || response === "success"}
            />

            <InputContainer
              label={texts.form.email.label}
              register={register("email", emailValidation)}
              error={errors.email?.message}
              isLoading={waitingResponse}
              disabled={waitingResponse || response === "success"}
            />

            <TextAreaContainer
              label="Message"
              register={register("message", messageValidation)}
              error={errors.message?.message}
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
                  <ErrorMessage error={texts.form.responseError} />
                ) : null}
              </div>

              <Button
                isLoading={waitingResponse}
                errors={errors}
                texts={texts}
              />
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
