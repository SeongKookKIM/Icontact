import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavLink = React.memo(({ to, label }) => (
  <li>
    <Link to={to} smooth={true} duration={500} offset={0}>
      <i>{label}</i>
    </Link>
  </li>
));

function MobileMenu() {
  const [isActive, setIsActive] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  function handleClick() {
    setIsActive(!isActive);
  }

  // Mobile
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 500) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className={`mobile ${isActive ? "active" : ""}`}>
      <NavLink to="about" label="ABOUT" />
      <NavLink to="roadmap" label="Road MAP" />
      <NavLink to="nfts" label="NFTS" />
      <NavLink to="team" label="Team" />
      <span
        className="toggle"
        onClick={handleClick}
        style={{ opacity: isTransparent ? 1 : isActive ? 1 : 0.5 }}
      ></span>
    </ul>
  );
}

export default React.memo(MobileMenu);
