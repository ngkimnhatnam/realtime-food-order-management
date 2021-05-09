//Dependencies import
import React from "react";

const OrderNote = ({ sidenote }) => {
  const style = {
    textAlign: "center",
    fontSize: "20px",
    padding: "10px 0px",
  };
  return <div style={style}>{sidenote}</div>;
};

export default OrderNote;
