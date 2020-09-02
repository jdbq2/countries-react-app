import React from "react";
import "./countrycomponent.scss";
import { connect } from "react-redux";
import numeral from "numeral";

const CountryComponent = ({ country }) => {
  const dataArray = [
    {
      item: "Capital: ",
      data: country.capital,
    },
    {
      item: "Region: ",
      data: country.region,
    },
    {
      item: "Sub-region: ",
      data: country.subregion,
    },
    {
      item: "Population: ",
      data: numeral(country.population).format("0,0"),
    },
    {
      item: "Area: ",
      data: `${numeral(country.area).format("0,0")} km2`,
    },
    {
      item: "Currencies: ",
      data: country.currencies ? country.currencies[0].name : " ",
    },
    {
      item: "Languages: ",
      data: country.languages ? country.languages[0].name : " ",
    },
    {
      item: "Borders: ",
      data: country.borders
        ? country.borders.length > 0
          ? ` ${country.borders}`
          : "This country dont have borders"
        : " ",
    },
  ];
  return (
    <div className="countryInfo">
      <h1 className="countryInfo__title">{country.name}</h1>
      <figure className="countryInfo__image">
        <img src={country.flag} alt={`This is the flag of ${country.name}`} />
      </figure>
      <section className="countryInfo__datacontainer">
        {dataArray.map((country) => (
          <div
            key={country.item}
            className="countryInfo__datacontainer__wraper"
          >
            <h2 className="countryInfo__datacontainer__wraper__item">
              {country.item}
            </h2>
            <h3 className="countryInfo__datacontainer__wraper__data">
              {country.data}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    country: state.country,
  };
};

export default connect(mapStateToProps, null)(CountryComponent);
