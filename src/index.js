import React from "react";
import { render } from "react-dom";
import App from "./routes/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducers";

const initialState = {
  countries: [],
  country: [],
  loading: false,
};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

const CONTAINER = document.getElementById("app");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  CONTAINER
);
