import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./Components/Application";

import { createStore } from "redux"
import { Provider } from "react-redux"

import reducer from "./Reducers"
import middleware from "./Middleware"

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
)
