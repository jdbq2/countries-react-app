import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MainCards from "../../components/MainCards/MainCards";
import "./home.scss";
import asia from "../../assets/images/asia.jpg";
import africa from "../../assets/images/africa.jpg";
import americas from "../../assets/images/americas.jpg";
import europe from "../../assets/images/europe.jpg";
import oceania from "../../assets/images/oceania.jpg";
import all from "../../assets/images/all.jpg";

const continents = [
  {
    name: "Asia",
    code: "asia",
    image: asia,
  },
  {
    name: "Africa",
    code: "africa",
    image: africa,
  },
  {
    name: "Americas",
    code: "americas",
    image: americas,
  },
  {
    name: "Oceania",
    code: "oceania",
    image: oceania,
  },
  {
    name: "Europe",
    code: "europe",
    image: europe,
  },
  {
    name: "All",
    code: "all",
    image: all,
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Welcome!</h1>
      <h3 className="home__subtitle">Select a continent</h3>
      <section className="home__cards">
        {continents.map(({ name, code, image }) => (
          <Link key={name} to={`/${code}`}>
            <MainCards name={name} image={image} />
          </Link>
        ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(Home);
