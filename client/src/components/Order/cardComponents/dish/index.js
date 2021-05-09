//Dependencies import
import React from "react";

// Components import
import DishName from "./name/index";
import DishQuantity from "./quantity/index";
import DishInitials from "./initials/index";

const Dish = ({ initials, name, quantity, type }) => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "center",
    fontSize: "25px",
    margin: "0% 5%",
  };

  return (
    <div style={style}>
      <DishQuantity quantity={quantity} />
      {type === "main" && <DishInitials initials={initials} />}
      {type === "side" && <DishName name={name} />}
    </div>
  );
};

export default Dish;
