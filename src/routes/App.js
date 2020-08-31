import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Continent from "../pages/Continent";
import Country from "../pages/Country";
import NotFound from "../pages/Notfound";

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
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} exact>
            <Component />
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
