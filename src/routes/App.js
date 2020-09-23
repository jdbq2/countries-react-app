import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Continent from "../pages/Continent/Continent";
import Country from "../pages/Country/Country";
import "./_app.scss";
import NotFound from "../pages/Notfound/NotFound";

const routes = [
  {
    path: "/",
    Component: Home,
    name: "home",
  },
  {
    path: "/asia/:code",
    Component: Country,
    name: "country",
  },
  {
    path: "/africa/:code",
    Component: Country,
    name: "country",
  },
  {
    path: "/americas/:code",
    Component: Country,
    name: "country",
  },
  {
    path: "/europe/:code",
    Component: Country,
    name: "country",
  },
  {
    path: "/oceania/:code",
    Component: Country,
    name: "country",
  },
  {
    path: "/all/:code",
    Component: Country,
    name: "country",
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
  {
    path: "/all",
    Component: Continent,
    name: "all",
  },
];

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Layout>
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    </HashRouter>
  );
};

export default App;
