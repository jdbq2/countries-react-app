import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="navbar__button">Menu</button>
      <div className="navbar__menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/asia">Go to Asia!</Link>
        <Link to="/africa">Go to Africa!</Link>
        <Link to="/americas">Go to Amercias!</Link>
        <Link to="/europe">Go to Europe!</Link>
        <Link to="/oceania">Go to Oceania!</Link>
      </div>
    </nav>
  );
};

export default Navbar;
