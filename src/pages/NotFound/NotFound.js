import React from "react";
import "./notfound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="errorpage">
      <h1 className="errorpage__title">
        OH NO! <br />
        😥
      </h1>
      <h2 className="errorpage__subtitle">
        We could not find the page you are looking for
      </h2>
      <Link to="/">
        <button className="errorpage__button"> 👉 To Home 👈</button>
      </Link>
    </div>
  );
};

export default NotFound;
