import { ReactComponent as Warning } from "../../assets/svg/warning.svg";
import TextArea from "./TextArea";

import "./InputContainer.scss";

const TextAreaContainer = ({
  label,
  register,
  error,
  isLoading,
  disabled,
  name,
  watch,
  minLength,
  maxLength,
  ...props
}) => {
  return (
    <span className="input-container">
      <div className="field-name-container">
        {!error ? (
          <p className="field-name">{label}</p>
        ) : (
          <div className="error-message">
            <Warning />

            {error?.message && <span>{error.message}</span>}
          </div>
        )}
      </div>

      <TextArea
        register={register}
        error={error}
        isLoading={isLoading}
        disabled={disabled}
        name={name}
        watch={watch}
        minLength={minLength}
        maxLength={maxLength}
        {...props}
      />
    </span>
  );
};

export default TextAreaContainer;
