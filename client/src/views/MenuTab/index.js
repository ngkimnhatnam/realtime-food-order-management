//Dependencies import
import React from "react";

// Components import
import PlatformPicker from "../../components/Menu/platformPicker/index";
import TimePicker from "../../components/Menu/timePicker/index";
import MenuDisplay from "../../components/Menu/card/index";
import PlusButton from "../../components/generics/buttons/Menu/plus/index";
import MinusButton from "../../components/generics/buttons/Menu/minus/index";
import QuantityDisplay from "../../components/Menu/cardComponents/quantity/index";

const MenuTab = ({
  data,
  pendingOrder,
  orderNote,
  orderTime,
  sendOrders,
  addQuantity,
  reduceQuantity,
  handleOrderNote,
  chooseCustomOrderTime,
  choosePredefinedOrderTime,
  chooseDeliveryPlatform,
}) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "center",
    width: "65%",
    margin: "0% 2%",
    height: "500px",
    overflowY: "scroll",
  };

  const menuStyle = {
    display: "flex",
    flexDirection: "row",
    margin: "0% 2%",
  };
  const formStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "0% 0% 5% 0%",
  };
  const quantityControlStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  };
  const inputStyle = {
    flex: "1 1 auto",
    padding: "10px 0px 0px 20px",
    fontSize: "20px",
    borderRadius: "10px",
    width: "35%",
  };
  const sendButtonStyle = {
    flex: "1 1 auto",
    fontSize: "30px",
    width: "20%",
    padding: "5px 15x",
    backgroundColor: "#008000",
    borderColor: "#008000",
    borderRadius: "7px",
    margin: "4% 2%",
    color: "white",
  };

  return (
    <div style={style}>
      <PlatformPicker onHandleClick={chooseDeliveryPlatform} />
      <TimePicker
        onHandleClick={choosePredefinedOrderTime}
        onHandleChange={chooseCustomOrderTime}
        value={orderTime}
      />
      <form onSubmit={sendOrders} style={formStyle}>
        {data.map((dish) => (
          <div key={dish.id} style={menuStyle}>
            <MenuDisplay
              initials={dish.initials}
              name={dish.name}
              type={dish.type}
            />
            <div style={quantityControlStyle}>
              <PlusButton onHandleClick={() => addQuantity(dish)} />
              <QuantityDisplay
                quantity={
                  !pendingOrder.find((order) => order.id === dish.id)
                    ? 0
                    : pendingOrder.find((order) => order.id === dish.id)
                        .quantity
                }
              />
              <MinusButton onHandleClick={() => reduceQuantity(dish)} />
            </div>
          </div>
        ))}
        <textarea
          value={orderNote}
          placeholder="Add note here..."
          onChange={handleOrderNote}
          style={inputStyle}
        />
        <button style={sendButtonStyle} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default MenuTab;
