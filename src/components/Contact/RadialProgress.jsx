import useRadialProgress from "../../hooks/useRadialProgress.jsx";

import "./RadialProgress.scss";

const RadialProgress = ({ disabled, watcher, minLength, maxLength }) => {
  const { messageRemaining, messageDegrees } = useRadialProgress(
    watcher,
    maxLength,
  );

  return (
    <div
      role="progressbar"
      /* aria-valuemin={0}
      aria-valuemax={NUMBER_OF_QUESTIONS}
      aria-valuenow={questionIndex} */
      className="radial-progress"
      style={{
        background: `${
          messageRemaining >= 0
            ? messageRemaining === 0 || messageRemaining > maxLength - minLength
              ? `conic-gradient(var(--red) ${messageDegrees}deg, ${
                  disabled ? "rgba(239, 239, 239, 0.3)" : "white"
                } 0deg)`
              : messageRemaining < maxLength / 4
              ? `conic-gradient(var(--yellow) ${messageDegrees}deg, ${
                  disabled ? "rgba(239, 239, 239, 0.3)" : "white"
                } 0deg)`
              : `conic-gradient(var(--green) ${messageDegrees}deg, ${
                  disabled ? "rgba(239, 239, 239, 0.3)" : "white"
                } 0deg)`
            : `white`
        }`,
      }}
    >
      <div
        className={`radial-progress-before${
          disabled ? " radial-progress-before-disabled" : ""
        }`}
      />

      <span
        className={disabled ? "radial-progress-number-disabled" : ""}
        style={{
          color: `${messageRemaining <= 0 ? "var(--red)" : "var(--black)"}`,
          /* fontWeight: `${messageRemaining <= 0 ? "700" : "500"}`, */
        }}
      >
        {messageRemaining}
      </span>
    </div>
  );
};

export default RadialProgress;
