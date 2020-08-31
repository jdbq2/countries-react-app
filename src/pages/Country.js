import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCountryData } from "../actions/actions";
import NotFound from "./Notfound";

const Country = ({ fetchCountryData, country, loading }) => {
  useEffect(() => {
    fetchCountryData(location.pathname.split("/").slice(-1).join(""));
  }, []);
  return country.message ? (
    <NotFound />
  ) : loading ? (
    <h1>LOADING...</h1>
  ) : (
    <h1>{country.name}</h1>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    country: state.country,
  };
};

const mapDispatchToProps = {
  fetchCountryData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Country);
