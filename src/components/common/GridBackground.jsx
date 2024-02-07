import React from "react";

import GridItem from "./GridItem";

import "./GridBackground.scss";

const GridBackground = ({ active, color, position, quantity }) => {
  //! VOLVER A VER modificar quantity dependiendo viewport
  return (
    <div
      className={`grid-container ${active ? "grid-active" : "grid-inactive"}`}
      style={{ [position]: "0" }}
    >
      {React.Children.toArray(Array(quantity).fill(<GridItem color={color} />))}
    </div>
  );
};

export default GridBackground;
