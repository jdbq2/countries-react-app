import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./navbar.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  let menu = useRef(null);
  let menuContainer = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let link4 = useRef(null);
  let link5 = useRef(null);
  let link6 = useRef(null);

  const handleMenuClick = () => {
    setClicked(!clicked);
    disabledButton();
  };

  const handleContinentClick = () => {
    setClicked(!clicked);
    disabledButton();
    window.scrollTo(0, 0);
  };

  const disabledButton = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1300);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    clicked
      ? (tl.to(menuContainer, {
          duration: 0.8,
          ease: "power3.inOut",
          css: { height: "100vh" },
        }),
        tl.to([menu, link1, link2, link3, link4, link5, link6], {
          duration: 0.8,
          ease: "power3.inOut",
          css: { display: "flex", opacity: 1 },
          stagger: {
            amount: 0.1,
          },
        }),
        (document.getElementsByTagName("html")[0].style.overflow = "hidden"))
      : (tl.to([menu, link1, link2, link3, link4, link5, link6], {
          duration: 0.8,
          ease: "power3.inOut",
          css: { display: "none", opacity: 0 },
          stagger: {
            amount: 0.1,
          },
        }),
        tl.to(menuContainer, {
          duration: 0.8,
          ease: "power3.inOut",
          css: { height: "auto" },
        }),
        (document.getElementsByTagName("html")[0].style.overflow = "auto"));
  }, [clicked]);
  return (
    <nav ref={(el) => (menuContainer = el)} className="navbar">
      <button
        disabled={disabled}
        onClick={handleMenuClick}
        className="navbar__button"
        tabIndex={0}
      >
        {clicked ? "Close" : "Menu"}
      </button>
      <div ref={(el) => (menu = el)} className="navbar__menu">
        <Link ref={(el) => (link1 = el)} onClick={handleContinentClick} to="/">
          Home
        </Link>
        <Link
          to="/asia"
          ref={(el) => (link2 = el)}
          onClick={handleContinentClick}
        >
          Go to Asia!
        </Link>
        <Link
          to="/africa"
          ref={(el) => (link3 = el)}
          onClick={handleContinentClick}
        >
          Go to Africa!
        </Link>
        <Link
          to="/americas"
          ref={(el) => (link4 = el)}
          onClick={handleContinentClick}
        >
          Go to Amercias!
        </Link>
        <Link
          to="/europe"
          ref={(el) => (link5 = el)}
          onClick={handleContinentClick}
        >
          Go to Europe!
        </Link>
        <Link
          to="/oceania"
          ref={(el) => (link6 = el)}
          onClick={handleContinentClick}
        >
          Go to Oceania!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
