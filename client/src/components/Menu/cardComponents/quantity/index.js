//Dependencies import
import React from "react";

const Quantity = ({ quantity = 0 }) => {
  const style = {
    fontSize: "20px",
    textAlign: "center",
    padding: "5px 10px",
    backgroundColor: "#e5e4e3",
  };
  return <div style={style}>{quantity}</div>;
};

export default Quantity;
