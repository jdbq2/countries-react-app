import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGlobalData, fetchContinentData } from "../../actions/actions";
import CountryCards from "../../components/CountryCards/CountryCards";
import "./continent.scss";

const Continent = ({
  countries,
  loading,
  fetchContinentData,
  fetchGlobalData,
}) => {
  useEffect(() => {
    if (location.pathname === "/all") {
      fetchGlobalData();
    } else {
      fetchContinentData(location.pathname.slice(1));
    }
  }, []);
  return loading ? (
    <h1>LOADING....</h1>
  ) : (
    <div className="countriesList">
      <h1 className="countriesList__title">{`${
        location.pathname.slice(1).charAt(0).toUpperCase() +
        location.pathname.slice(2)
      } countries`}</h1>
      <div className="countriesList__cards">
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
    loading: state.loading,
    countries: state.countries,
  };
};

const mapDispatchToProps = {
  fetchGlobalData,
  fetchContinentData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Continent);
