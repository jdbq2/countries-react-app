import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CountryCards from "../../components/CountryCards/CountryCards";
import "./continent.scss";
import gsap from "gsap";

const ContinentComponent = ({ countries }) => {
  let title = useRef(null);
  let cards = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [title, cards],
      { css: { opacity: 0, y: -100 } },
      {
        duration: 0.8,
        ease: "circ.out",
        css: { opacity: 1, y: 0 },
        stagger: {
          amount: 0.4,
        },
      }
    );
  }, []);
  return (
    <div className="countriesList">
      <h1 ref={(el) => (title = el)} className="countriesList__title">{`${
        location.pathname.slice(1).charAt(0).toUpperCase() +
        location.pathname.slice(2)
      } countries`}</h1>
      <div ref={(el) => (cards = el)} className="countriesList__cards">
        {countries.map((country) => (
          <Link
            key={country.alpha3Code}
            to={`${location.pathname}/${country.alpha3Code.toLowerCase()}`}
          >
            <CountryCards
              name={country.name}
              subregion={country.subregion}
              image={country.flag}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, null)(ContinentComponent);
