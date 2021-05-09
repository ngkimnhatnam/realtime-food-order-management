//Dependencies import
import React from "react";

const RemoveButton = ({ onHandleClick }) => {
  const style = {
    textAlign: "center",
    color: "white",
    fontSize: "20px",
    backgroundColor: "#d21404",
    padding: "10px 0px",
    borderColor: "#d21404",
    borderRadius: "0px 0px 15px 15px",
  };

  return (
    <button style={style} onClick={onHandleClick}>
      Click to remove
    </button>
  );
};

export default RemoveButton;
