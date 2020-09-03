import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Continent from "../pages/Continent/Continent";
import Country from "../pages/Country/Country";
import { CSSTransition } from "react-transition-group";
import "./_app.scss";
import "./page.scss";

const routes = [
  {
    path: "/",
    Component: Home,
    name: "home",
  },
  {
    path: "/:continent/:code",
    Component: Country,
    name: "country",
  },
  {
    path: "/:continent",
    Component: Continent,
    name: "countries",
  },
  {
    path: "/asia",
    Component: Continent,
    name: "asia",
  },
  {
    path: "/europe",
    Component: Continent,
    name: "asia",
  },
  {
    path: "/americas",
    Component: Continent,
    name: "asia",
  },
  {
    path: "/africa",
    Component: Continent,
    name: "asia",
  },
  {
    path: "/oceania",
    Component: Continent,
    name: "asia",
  },
];

const App = () => {
  return (
    <HashRouter basename="/">
      <Layout>
        {routes.map(({ path, Component, name }) => (
          <Route key={path} exact={true} path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={400}
                classNames="page"
                unmountOnExit
              >
                <div className="app">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Layout>
    </HashRouter>
  );
};

export default App;
