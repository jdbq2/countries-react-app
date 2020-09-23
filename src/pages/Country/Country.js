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

  const hashContinent =
    location.hash.split("/")[1].charAt(0).toUpperCase() +
    location.hash.split("/")[1].slice(1);

  const fetchContinent = country.region;
  console.log(loading, country, location.hash.split("/")[1]);

  const validation = () => {
    if (location.hash.split("/")[1] === "all") {
      if (country.message) {
        return true;
      } else {
        return false;
      }
    } else {
      if (hashContinent === fetchContinent) {
        return false;
      } else {
        return true;
      }
    }
  };

  return loading ? (
    <Loader />
  ) : validation() ? (
    <NotFound />
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
