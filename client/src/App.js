// Dependencies import
import React, { useState, useEffect } from "react";
import axios from "axios";
import { socket } from "./utils/socketio/index";
import { io } from "socket.io-client";

// Views import
import MenuTab from "./views/MenuTab/index";
import DoingTab from "./views/OrderTab/index";

const App = () => {
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState([]);

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

  return (
    <div style={style}>
      <MenuTab data={menu} />
      <DoingTab orders={orders} />
    </div>
  );
};

export default App;
