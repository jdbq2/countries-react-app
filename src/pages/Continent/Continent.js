import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGlobalData, fetchContinentData } from "../../actions/actions";
import Loader from "../../components/Loader/Loader";
import ContinentComponent from "../../components/ContinentComponent/ContinentComponent";
import NotFound from "../Notfound/NotFound";

const Continent = ({
  countries = [],
  loading,
  fetchContinentData,
  fetchGlobalData,
}) => {
  useEffect(() => {
    if (location.hash.split("/")[1] === "all") {
      fetchGlobalData();
    } else {
      fetchContinentData(location.hash.split("/")[1]);
    }
  }, []);
  return countries.length < 1 ? (
    <NotFound />
  ) : loading ? (
    <Loader />
  ) : (
    <ContinentComponent />
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
