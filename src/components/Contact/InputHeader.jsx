import ErrorMessage from "./ErrorMessage";

import "./InputHeader.scss";

const InputHeader = ({ label, error }) => {
  return (
    <div className="field-name-container">
      {!error ? (
        <p className="field-name">{label}</p>
      ) : (
        <ErrorMessage error={error} />
      )}
    </div>
  );
};

export default InputHeader;
