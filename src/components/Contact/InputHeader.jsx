import { ReactComponent as Warning } from "../../assets/svg/warning.svg";

import "./InputHeader.scss";

const InputHeader = ({ label, error }) => {
  return (
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
  );
};

export default InputHeader;
