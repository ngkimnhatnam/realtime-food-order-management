//Dependencies import
import React from "react";

const OrderPlatform = ({ platform }) => {
  const woltStyle = {
    textAlign: "center",
    fontSize: "20px",
    color: "white",
    backgroundColor: "#0037b1",
    borderRadius: "15px 15px 0px 0px",
  };
  const foodoraStyle = {
    textAlign: "center",
    fontSize: "20px",
    color: "white",
    backgroundColor: "#c1047b",
    borderRadius: "15px 15px 0px 0px",
  };
  return (
    <div style={platform === "wolt" ? woltStyle : foodoraStyle}>{platform}</div>
  );
};

export default OrderPlatform;
