import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCountryData } from "../../actions/actions";
import NotFound from "../Notfound/NotFound";
import CountryComponent from "../../components/CountryComponent/CountryComponent";
import Loader from "../../components/Loader/Loader";

const Country = ({ fetchCountryData, country, loading }) => {
  useEffect(() => {
    fetchCountryData(location.hash.split("/")[2]);
  }, []);
  return country.message ? (
    <NotFound />
  ) : loading ? (
    <Loader />
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
