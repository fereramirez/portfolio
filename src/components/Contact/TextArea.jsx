import RadialProgress from "./RadialProgress.jsx";

import "./TextArea.scss";

const TextArea = ({
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
    <span className="textarea-container">
      <textarea
        {...props}
        type="text"
        autoComplete="off"
        id="message-text-area"
        disabled={disabled}
        className={`textarea input${error ? " input-error" : ""}${
          isLoading ? " waiting" : ""
        }`}
        aria-label={name}
        {...register}
        /* onPaste={(e) => e.preventDefault()} */
      />

      <RadialProgress
        watcher={watch(name)}
        minLength={minLength}
        maxLength={maxLength}
      />
    </span>
  );
};

export default TextArea;
