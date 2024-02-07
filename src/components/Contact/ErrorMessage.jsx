import { ReactComponent as Warning } from "../../assets/svg/warning.svg";

import "./ErrorMessage.scss";

const ErrorMessage = ({ error }) => {
  return (
    <div className="error-message">
      <Warning />

      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
