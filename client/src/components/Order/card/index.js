//Dependencies import
import React from "react";

// Components import
import Dish from "../cardComponents/dish/index";
import OrderTime from "../cardComponents/time/index";
import OrderPlatform from "../cardComponents/platform/index";
import OrderNote from "../cardComponents/note/index";
import RemoveButton from "../../generics/buttons/Order/remove/index";

const OrderCard = ({
  id,
  dishes,
  time,
  platform,
  sidenote,
  removeFinishedOrder,
}) => {
  const wolt = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    margin: "2% 2%",
    backgroundColor: "#77c3ec",
    borderRadius: "15px 15px 15px 15px",
  };
  const foodora = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    margin: "2% 2%",
    backgroundColor: "#fc8cd2",
    borderRadius: "15px 15px 15px 15px",
  };

  return (
    <div style={platform === "wolt" ? wolt : foodora}>
      <OrderPlatform platform={platform} />
      {dishes.map((dish) => (
        <Dish
          initials={dish.initials}
          name={dish.name}
          quantity={dish.quantity}
          type={dish.type}
        />
      ))}
      {sidenote !== "" && <OrderNote sidenote={sidenote} />}
      <OrderTime time={time} />
      <RemoveButton onHandleClick={() => removeFinishedOrder(id)} />
    </div>
  );
};

export default OrderCard;
