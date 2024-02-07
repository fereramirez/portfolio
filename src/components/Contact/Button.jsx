import { ReactComponent as Spinner } from "../../assets/svg/spinner.svg";

import "./Button.scss";

const Button = ({ isLoading, errors, texts }) => {
  return (
    <button
      type="submit"
      disabled={isLoading || Object.keys(errors).length}
      className={`button${isLoading ? " waiting" : ""} ${
        Object.keys(errors).length ? " button-error" : ""
      }`}
    >
      {isLoading ? (
        <Spinner className="spinner" />
      ) : Object.keys(errors).length ? (
        texts.form.submitError
      ) : (
        texts.form.submit
      )}
    </button>
  );
};

export default Button;
