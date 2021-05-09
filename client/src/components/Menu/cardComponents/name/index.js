//Dependencies import
import React from "react";

const Name = ({ name }) => {
  const textStyle = {
    textAlign: "left",
    padding: "20px 0px",
    fontWeight: "600",
    flex: "1 1 auto",
  };
  return <div style={textStyle}>{name}</div>;
};

export default Name;
