//Dependencies import
import React from "react";

const DishInitials = ({ initials }) => {
  const initialsStyle = {
    textAlign: "left",
    flexGrow: "1",
    padding: "5px",
    fontWeight: "700",
  };
  return <div style={initialsStyle}>{initials}</div>;
};

export default DishInitials;
