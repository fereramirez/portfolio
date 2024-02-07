import InputHeader from "./InputHeader";
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
      <InputHeader label={label} error={error} />

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
