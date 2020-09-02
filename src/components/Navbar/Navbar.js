import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  let menu = useRef(null);
  let menuContainer = useRef(null);

  const handleMenuClick = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    clicked
      ? ((menu.style.display = "flex"), (menuContainer.style.height = "100vh"))
      : ((menu.style.display = "none"), (menuContainer.style.height = "auto"));
  }, [clicked]);
  return (
    <nav ref={(el) => (menuContainer = el)} className="navbar">
      <button onClick={handleMenuClick} className="navbar__button" tabIndex={0}>
        Menu
      </button>
      <div ref={(el) => (menu = el)} className="navbar__menu">
        <Link onClick={handleMenuClick} to="/">
          Home
        </Link>
        <Link onClick={handleMenuClick} to="/about">
          About
        </Link>
        <Link onClick={handleMenuClick} to="/asia">
          Go to Asia!
        </Link>
        <Link onClick={handleMenuClick} to="/africa">
          Go to Africa!
        </Link>
        <Link onClick={handleMenuClick} to="/americas">
          Go to Amercias!
        </Link>
        <Link onClick={handleMenuClick} to="/europe">
          Go to Europe!
        </Link>
        <Link onClick={handleMenuClick} to="/oceania">
          Go to Oceania!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
