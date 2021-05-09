//Dependencies import
import React from "react";

const DishName = ({ name }) => {
  const style = {
    textAlign: "left",
    padding: "5px",
    flexGrow: "1",
    fontWeight: "700",
  };
  return <div style={style}>{name}</div>;
};

export default DishName;
