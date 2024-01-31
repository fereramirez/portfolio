import { ReactComponent as Warning } from "../../assets/svg/warning.svg";

import "./InputContainer.scss";

const InputContainer = ({
  register,
  label,
  isLoading,
  error,
  disabled,
  ...props
}) => {
  return (
    <span className="input-container">
      <div className="field-name-container">
        {!error ? (
          <p className="field-name">{label}</p>
        ) : (
          <div className="error">
            <Warning />

            {error?.message && <span>{error.message}</span>}
          </div>
        )}
      </div>

      <input
        {...props}
        type="text"
        disabled={disabled}
        autoComplete="off"
        className={`input${error ? " input-error" : ""}${
          isLoading ? " waiting" : ""
        }`}
        {...register}
      />
    </span>
  );
};

export default InputContainer;
