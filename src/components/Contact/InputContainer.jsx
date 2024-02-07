import InputHeader from "./InputHeader";
import Input from "./Input";

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
      <InputHeader label={label} error={error} />

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
