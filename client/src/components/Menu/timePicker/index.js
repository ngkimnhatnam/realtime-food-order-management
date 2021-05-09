//Dependencies import
import React from "react";

const TimePicker = ({ onHandleClick, onHandleChange, value }) => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "0% 2%",
  };
  const formStyle = {
    display: "flex",
    flex: "1 1 auto",
    width: "20%",
    justifyContent: "flex-start",
  };
  const inputStyle = {
    fontSize: "20px",
    padding: "0px 5px",
    margin: "0% 3%",
    borderRadius: "10px",
    height: "55px",
    width: "50%",
  };
  const buttonStyle = {
    fontSize: "20px",
    borderRadius: "10px",
    flex: "1 1 auto",
    height: "60px",
    backgroundColor: "#6d6966",
    color: "white",
    borderColor: "#6d6966",
    margin: "0% 1%",
  };
  return (
    <div style={style}>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => onHandleClick(10)}
      >
        10m
      </button>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => onHandleClick(15)}
      >
        15m
      </button>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => onHandleClick(20)}
      >
        20m
      </button>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => onHandleClick(30)}
      >
        30m
      </button>
      <form style={formStyle}>
        <input
          placeholder="Enter custom time here"
          value={value}
          style={inputStyle}
          onChange={onHandleChange}
        />
      </form>
    </div>
  );
};

export default TimePicker;
