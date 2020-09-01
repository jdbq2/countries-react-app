import React from "react";
import "./maincards.scss";

const MainCards = ({ image, name }) => {
  return (
    <div className="maincards">
      <figure className="maincards__image">
        <img src={image} alt={`Image of ${name}`} />
      </figure>
      <h1 className="maincards__name">{name}</h1>
    </div>
  );
};

export default MainCards;
