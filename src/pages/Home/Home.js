import React, { useRef, useEffect } from "react";
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
import gsap from "gsap";
import Head from "../../components/Head/Head";

const continents = [
  {
    name: "Asia",
    code: "countries-react-app/asia",
    image: asia,
  },
  {
    name: "Africa",
    code: "countries-react-app/africa",
    image: africa,
  },
  {
    name: "Americas",
    code: "countries-react-app/americas",
    image: americas,
  },
  {
    name: "Oceania",
    code: "countries-react-app/oceania",
    image: oceania,
  },
  {
    name: "Europe",
    code: "countries-react-app/europe",
    image: europe,
  },
  {
    name: "All",
    code: "countries-react-app/all",
    image: all,
  },
];

const Home = () => {
  let title = useRef(null);
  let subtitle = useRef(null);
  let cards = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [title, subtitle, cards],
      { css: { opacity: 0, y: -100 } },
      {
        duration: 0.6,
        ease: "circ.out",
        css: { opacity: 1, y: 0 },
        stagger: {
          amount: 0.2,
        },
      }
    );
  }, []);

  return (
    <div className="home">
      <Head
        pageTitle="Home Page"
        description="Page to selecto a continet and get ifo about it"
      />
      <h1 ref={(el) => (title = el)} className="home__title">
        Welcome!
      </h1>
      <h3 ref={(el) => (subtitle = el)} className="home__subtitle">
        Select a continent
      </h3>
      <section ref={(el) => (cards = el)} className="home__cards">
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
