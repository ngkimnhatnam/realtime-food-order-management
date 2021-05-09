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

  const [pendingOrder, setPendingOrder] = useState([]);
  const [orderType, setOrderType] = useState("");
  const [orderTime, setOrderTime] = useState("");
  const [orderId, setOrderId] = useState(1);
  const [orderNote, setOrderNote] = useState("");

  useEffect(() => {
    axios.get("http://3.208.20.48:3001/api/v1/menus").then((menu) => {
      setMenu(menu.data.data);
    });
  }, []);

  const removeFinishedOrder = (id) => {
    socket.emit("remove-order", id);
    const pendingOrderList = orders.filter((order) => order.id !== id);
    setOrders(pendingOrderList);
  };

  const sendOrders = (event) => {
    event.preventDefault();

    const newOrder = {
      id: orderId,
      dishes: pendingOrder,
      time: orderTime,
      type: orderType,
      sidenote: orderNote,
    };

    const socket = io("http://3.208.20.48:3001");
    socket.emit("send-order", newOrder);
    setOrderType("");
    setPendingOrder([]);
    setOrderTime("");
    setOrderNote("");
    let newId = orderId + 1;
    setOrderId(newId);
  };

  const addQuantity = (dishToAdd) => {
    const { id, initials, name, type } = dishToAdd;
    const newDish = { id, initials, name, type, quantity: 1 };

    if (!pendingOrder.some((order) => order.id === id)) {
      setPendingOrder(pendingOrder.concat(newDish));
    } else {
      const newOrderList = pendingOrder.map((order) => {
        if (order.id === dishToAdd.id) {
          order.quantity++;
        }
        return order;
      });
      setPendingOrder(newOrderList);
    }
  };
  const reduceQuantity = (dishToReduce) => {
    const { id } = dishToReduce;
    if (pendingOrder.some((order) => order.id === id)) {
      const newOrderList = pendingOrder
        .map((order) => {
          if (order.id === dishToReduce.id && order.quantity >= 1) {
            order.quantity--;
          }
          return order;
        })
        .filter((order) => order.quantity > 0);

      setPendingOrder(newOrderList);
    }
  };

  const chooseDeliveryPlatform = (type) => {
    setOrderType(type);
  };

  const choosePredefinedOrderTime = (time) => {
    setOrderTime(time);
  };

  const chooseCustomOrderTime = (event) => {
    setOrderTime(event.target.value);
  };

  const handleOrderNote = (event) => {
    setOrderNote(event.target.value);
  };

  const style = {
    border: "1px solid #E7E7E7",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <MenuTab
        data={menu}
        pendingOrder={pendingOrder}
        orderTime={orderTime}
        orderNote={orderNote}
        chooseDeliveryPlatform={chooseDeliveryPlatform}
        choosePredefinedOrderTime={choosePredefinedOrderTime}
        chooseCustomOrderTime={chooseCustomOrderTime}
        handleOrderNote={handleOrderNote}
        reduceQuantity={reduceQuantity}
        addQuantity={addQuantity}
        sendOrders={sendOrders}
      />
      <DoingTab orders={orders} removeFinishedOrder={removeFinishedOrder} />
    </div>
  );
};

export default App;
