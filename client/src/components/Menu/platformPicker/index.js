//Dependencies import
import React from "react";

const PlatformPicker = ({ onHandleClick }) => {
  const style = {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    margin: "2% 2%",
  };
  const wolt = {
    fontSize: "30px",
    flex: "1 1 auto",
    color: "#efefff",
    backgroundColor: "#0037b1",
    borderRadius: "12px 12px 0px 0px",
    borderColor: "#0037b1",
  };
  const foodora = {
    fontSize: "30px",
    flex: "1 1 auto",
    color: "white",
    backgroundColor: "#c1047b",
    borderRadius: "12px 12px 0px 0px",
    borderColor: "#c1047b",
  };
  return (
    <div style={style}>
      <button style={wolt} type="button" onClick={() => onHandleClick("wolt")}>
        Wolt
      </button>
      <button
        style={foodora}
        type="button"
        onClick={() => onHandleClick("foodora")}
      >
        Foodora
      </button>
    </div>
  );
};

export default PlatformPicker;
