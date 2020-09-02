import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCountryData } from "../../actions/actions";
import NotFound from "../Notfound/NotFound";
import CountryComponent from "../../components/CountryComponent/CountryComponent";

const Country = ({ fetchCountryData, country, loading }) => {
  useEffect(() => {
    fetchCountryData(location.pathname.split("/").slice(-1).join(""));
  }, []);
  return country.message ? (
    <NotFound />
  ) : loading ? (
    <h1>LOADING...</h1>
  ) : (
    <CountryComponent />
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
