import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGlobalData, fetchContinentData } from "../../actions/actions";

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
    countries.map((country) => (
      <Link
        key={country.name}
        to={`${location.pathname}/${country.alpha2Code.toLowerCase()}`}
      >
        <h1 key={`${country.name}`}>{country.name}</h1>
      </Link>
    ))
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
