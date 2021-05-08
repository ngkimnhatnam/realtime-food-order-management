// Dependencies import
import React, { useState, useEffect } from "react";
import axios from "axios";
import { socket } from "./utils/socketio/index";
import { io } from "socket.io-client";

const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("http://3.208.20.48:3001/api/v1/menus").then((menu) => {
      setMenu(menu.data.data);
    });
  }, []);

  const style = {
    border: "1px solid #E7E7E7",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  };

  return <div style={style}></div>;
};

export default App;
