//Dependencies import
import React from "react";

// Components import
import OrderCard from "../../components/Order/card/index";

const DoingTab = ({ orders, removeFinishedOrder }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "center",
    width: "30%",
    height: "800px",
    overflowY: "scroll",
  };

  return (
    <div style={style}>
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          id={order.id}
          dishes={order.dishes}
          time={order.time}
          platform={order.type}
          sidenote={order.sidenote}
          removeFinishedOrder={removeFinishedOrder}
        />
      ))}
    </div>
  );
};

export default DoingTab;
