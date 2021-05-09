//Dependencies import
import React from "react";

const Minus = ({ onHandleClick }) => {
  const style = {
    fontSize: "20px",
    padding: "5px 10px",
    borderRadius: "0px 10px 10px 0px",
    color: "white",
    backgroundColor: "#6d6966",
    borderColor: "#6d6966",
  };
  return (
    <div>
      <button style={style} type="button" onClick={onHandleClick}>
        -
      </button>
    </div>
  );
};

export default Minus;
