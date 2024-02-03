import useAnimationContext from "../../hooks/useAnimationContext";
// import GridBackground from "../common/GridBackground";

import "./Title.scss";

const Title = ({ text, label, ...props }) => {
  const { linkSelected } = useAnimationContext();

  return (
    <div
      {...props}
      role="button"
      tabIndex={0}
      className={`title-link ${
        linkSelected === text
          ? "link-selected"
          : linkSelected !== ""
          ? "link-not-selected"
          : "link-selectable"
      }`}
    >
      <div className="title-container">
        <h1>{label}</h1>
      </div>

      <div className="background-hover">
        {/* <GridBackground active={true} /> quantity={GRID_ITEMS_QUANTITY} */}
      </div>
    </div>
  );
};

export default Title;
