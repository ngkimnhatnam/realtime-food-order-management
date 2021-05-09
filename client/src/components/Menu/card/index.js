//Dependencies import
import React from "react";

// Components import
import MenuInitials from "../../Menu/cardComponents/initials/index";
import Name from "../../Menu/cardComponents/name/index";

const MenuCard = ({ initials, name, type }) => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "center",
    fontSize: "20px",
    margin: "2% 5px 2% 0%",
  };

  return (
    <div style={style}>
      {type === "main" && <MenuInitials initials={initials} />}
      {type === "main" && initials === null && <Name name={name} />}
      {type === "side" && <Name name={name} />}
    </div>
  );
};

export default MenuCard;
