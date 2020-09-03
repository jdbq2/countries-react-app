import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Continent from "../pages/Continent/Continent";
import Country from "../pages/Country/Country";
import { CSSTransition } from "react-transition-group";
import "./_app.scss";
import "./page.scss";

const routes = [
  {
    path: "/countries-react-app/",
    Component: Home,
    name: "home",
  },
  {
    path: "/countries-react-app/:continent/:code",
    Component: Country,
    name: "country",
  },
  {
    path: "/countries-react-app/:continent",
    Component: Continent,
    name: "countries",
  },
];

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
