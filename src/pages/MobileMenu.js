import React, { useState } from "react";
import { Link } from "react-scroll";

function MobileMenu() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <ul className={`mobile ${isActive ? "active" : ""}`}>
      <span className="toggle" onClick={handleClick}></span>
      <li>
        <Link to="roadmap" smooth={true} duration={500} offset={0}>
          <i>Road MAP</i>
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500} offset={0}>
          <i>ABOUT</i>
        </Link>
      </li>
      <li>
        <Link to="nfts" smooth={true} duration={500} offset={0}>
          <i>NFTS</i>
        </Link>
      </li>
      <li>
        <Link to="shop" smooth={true} duration={500} offset={0}>
          <i>SHOP</i>
        </Link>
      </li>
    </ul>
  );
}

export default MobileMenu;
