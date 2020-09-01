import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Continent from "../pages/Continent/Continent";
import Country from "../pages/Country/Country";
import NotFound from "../pages/NotFound/NotFound";
import "./_app.scss";

const routes = [
  {
    path: "/",
    Component: Home,
    name: "home",
  },
  {
    path: "/about",
    Component: About,
    name: "about",
  },
  {
    path: "/asia",
    Component: Continent,
    name: "asia",
  },
  {
    path: "/asia/:code",
    Component: Country,
    name: "asia",
  },
  {
    path: "/oceania",
    Component: Continent,
    name: "oceania",
  },
  {
    path: "/oceania/:code",
    Component: Country,
    name: "oceania",
  },
  {
    path: "/europe",
    Component: Continent,
    name: "oceania",
  },
  {
    path: "/europe/:code",
    Component: Country,
    name: "oceania",
  },
  {
    path: "/americas",
    Component: Continent,
    name: "americas",
  },
  {
    path: "/americas/:code",
    Component: Country,
    name: "americas",
  },
  {
    path: "/africa",
    Component: Continent,
    name: "africa",
  },
  {
    path: "/africa/:code",
    Component: Country,
    name: "africa",
  },
  {
    path: "/all",
    Component: Continent,
    name: "all",
  },
  {
    path: "/all/:code",
    Component: Country,
    name: "all",
  },
];
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map(({ path, Component, name }) => (
              <Route key={name} path={path} exact>
                <Component />
              </Route>
            ))}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
