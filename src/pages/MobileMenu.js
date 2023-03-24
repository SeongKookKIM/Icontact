import React, { useState } from "react";
import { Link } from "react-scroll";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";

function MobileMenu() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mobile">
      <BottomNavigation
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="RoadMap"
          value="roadmap"
          icon={<RoomRoundedIcon />}
        />

        <BottomNavigationAction
          label="About"
          value="about"
          icon={<InfoRoundedIcon />}
        />

        <BottomNavigationAction
          label="Nfts"
          value="nfts"
          icon={<CurrencyBitcoinRoundedIcon />}
        />

        <BottomNavigationAction
          label="Shop"
          value="shop"
          icon={<ShoppingBasketRoundedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default MobileMenu;
