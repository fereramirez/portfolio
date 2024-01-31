import "./Input.scss";

const Input = ({ register, error, isLoading, disabled, ...props }) => {
  return (
    <input
      {...props}
      type="text"
      disabled={disabled}
      autoComplete="off"
      className={`input${error ? " input-error" : ""}${
        isLoading ? " waiting" : ""
      }`}
      {...register}
      /* onPaste={(e) => e.preventDefault()} */
    />
  );
};

export default Input;
