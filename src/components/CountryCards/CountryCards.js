import React from "react";

const CountryCards = ({ image, name, subregion }) => {
  return (
    <div className="countrycards">
      <figure className="countrycards__image">
        <img src={image} alt={`Image of ${name}`} />
      </figure>
      <h1 className="countrycards__name">{name}</h1>
      <h3 className="countrycards__subregion">{subregion}</h3>
    </div>
  );
};

export default CountryCards;
