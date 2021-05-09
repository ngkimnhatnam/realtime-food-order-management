//Dependencies import
import React from "react";

const DishQuantity = ({ quantity }) => {
  const style = {
    textAlign: "center",
    padding: "5px",
  };
  return <div style={style}>{quantity}</div>;
};

export default DishQuantity;
