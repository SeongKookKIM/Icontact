import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function MobileMenu() {
  const [isActive, setIsActive] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  function handleClick() {
    setIsActive(!isActive);
  }

  // Mobile
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 500) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  }

  return (
    <ul className={`mobile ${isActive ? "active" : ""}`}>
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
      <span
        className="toggle"
        onClick={handleClick}
        style={{ opacity: isTransparent ? 1 : isActive ? 1 : 0.5 }}
      ></span>
    </ul>
  );
}

export default MobileMenu;
