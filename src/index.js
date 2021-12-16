import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import CalculatorComponent from "./containers/CalculatorComponent";
import store from "./store";
import "./App.css";

render(
  <Provider store={store}>
    <CalculatorComponent />
  </Provider>,
  document.getElementById("root")
);
