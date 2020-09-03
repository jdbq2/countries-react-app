import React, { useRef, useEffect } from "react";
import "./countrycomponent.scss";
import { connect } from "react-redux";
import numeral from "numeral";
import gsap from "gsap";

const CountryComponent = ({ country }) => {
  const dataArray = [
    {
      item: "Capital: ",
      data: country.capital,
      reference: (el) => (capital = el),
    },
    {
      item: "Region: ",
      data: country.region,
      reference: (el) => (region = el),
    },
    {
      item: "Sub-region: ",
      data: country.subregion,
      reference: (el) => (subregion = el),
    },
    {
      item: "Population: ",
      data: numeral(country.population).format("0,0"),
      reference: (el) => (population = el),
    },
    {
      item: "Area: ",
      data: `${numeral(country.area).format("0,0")} km2`,
      reference: (el) => (area = el),
    },
    {
      item: "Currencies: ",
      data: country.currencies ? country.currencies[0].name : " ",
      reference: (el) => (currencies = el),
    },
    {
      item: "Languages: ",
      data: country.languages ? country.languages[0].name : " ",
      reference: (el) => (languages = el),
    },
    {
      item: "Borders: ",
      data: country.borders
        ? country.borders.length > 0
          ? JSON.stringify(country.borders).split(",").join(" ")
          : "This country has no borders"
        : " ",
      reference: (el) => (borders = el),
    },
  ];

  let name = useRef(null);
  let flag = useRef(null);
  let capital = useRef(null);
  let region = useRef(null);
  let subregion = useRef(null);
  let population = useRef(null);
  let area = useRef(null);
  let currencies = useRef(null);
  let languages = useRef(null);
  let borders = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        name,
        flag,
        capital,
        region,
        subregion,
        population,
        area,
        currencies,
        languages,
        borders,
      ],
      { css: { opacity: 0, y: 200 } },
      {
        duration: 2,
        ease: "circ.out",
        css: { opacity: 1, y: 0 },
        stagger: {
          amount: 0.2,
        },
      }
    );
  }, []);

  return (
    <div className="countryInfo">
      <h1 ref={(el) => (name = el)} className="countryInfo__title">
        {country.name}
      </h1>
      <figure ref={(el) => (flag = el)} className="countryInfo__image">
        <img src={country.flag} alt={`This is the flag of ${country.name}`} />
      </figure>
      <section className="countryInfo__datacontainer">
        {dataArray.map((country) => (
          <div
            ref={country.reference}
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
