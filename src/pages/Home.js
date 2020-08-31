import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const continents = [
  {
    name: "Asia",
    code: "asia",
    image: "URL",
  },
  {
    name: "Africa",
    code: "africa",
    image: "URL",
  },
  {
    name: "Americas",
    code: "americas",
    image: "URL",
  },
  {
    name: "Oceania",
    code: "oceania",
    image: "URL",
  },
  {
    name: "Europe",
    code: "europe",
    image: "URL",
  },
  {
    name: "All",
    code: "all",
    image: "URL",
  },
];

const Home = () => {
  return continents.map(({ name, code, image }) => (
    <Link key={name} to={`/${code}`}>
      <h1>{name}</h1>
    </Link>
  ));
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(Home);
