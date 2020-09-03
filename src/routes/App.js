import React from "react";
import { BrowserRouter, Route, Switch, matchPath } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Continent from "../pages/Continent/Continent";
import Country from "../pages/Country/Country";
import NotFound from "../pages/NotFound/NotFound";
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
    path: "/:continent",
    Component: Continent,
    name: "all",
  },
  {
    path: "/:continent/:code",
    Component: Country,
    name: "all",
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        {routes.map(({ path, Component, name }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
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
