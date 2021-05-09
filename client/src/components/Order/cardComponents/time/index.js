//Dependencies import
import React from "react";

const OrderTime = ({ time }) => {
  const style = {
    textAlign: "center",
    fontSize: "20px",
    padding: "10px 0px",
  };
  return <div style={style}>{time} minutes</div>;
};

export default OrderTime;
