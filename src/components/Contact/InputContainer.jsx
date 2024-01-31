import Input from "./Input";
import { ReactComponent as Warning } from "../../assets/svg/warning.svg";

import "./InputContainer.scss";

const InputContainer = ({
  label,
  register,
  error,
  isLoading,
  disabled,
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

      <Input
        register={register}
        error={error}
        isLoading={isLoading}
        disabled={disabled}
        {...props}
      />
    </span>
  );
};

export default InputContainer;
