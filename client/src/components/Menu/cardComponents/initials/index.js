//Dependencies import
import React from "react";

const Initials = ({ initials }) => {
  const initialsStyle = {
    textAlign: "left",
    flexGrow: "1",
    padding: "20px",
    fontWeight: "700",
  };
  return <div style={initialsStyle}>{initials}</div>;
};

export default Initials;
