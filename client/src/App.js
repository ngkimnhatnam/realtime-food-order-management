// Dependencies import
import React, { useState, useEffect } from "react";
import axios from "axios";
import { socket } from "./utils/socketio/index";
import { io } from "socket.io-client";
import useSound from "use-sound";

// Assets import
import notiSound from "./public/sounds/sound1.wav";

// Views import
import MenuTab from "./views/MenuTab/index";
import DoingTab from "./views/OrderTab/index";

// Config import
import generalConfig from "../src/configs/index";

const App = () => {
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState([]);

  const [pendingOrder, setPendingOrder] = useState([]);
  const [orderType, setOrderType] = useState("");
  const [orderTime, setOrderTime] = useState("");
  const [orderId, setOrderId] = useState(1);
  const [orderNote, setOrderNote] = useState("");

  const [play] = useSound(notiSound);

  useEffect(() => {
    axios.get(generalConfig.menu_api_endpoint).then((menu) => {
      setMenu(menu.data.data);
    });
  }, []);

  useEffect(() => {
    socket.off("new-order").on("new-order", (order) => {
      play();
      setOrders(orders.concat(order));
    });
  }, [orders]);

  useEffect(() => {
    socket.off("delete-order").on("delete-order", (id) => {
      const pendingOrderList = orders.filter((order) => order.id !== id);
      setOrders(pendingOrderList);
    });
  }, [orders]);

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

    const socket = io(generalConfig.server_address);
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
