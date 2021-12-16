import React, { Component } from "react";
import { connect } from "react-redux";
import Calculator from "../components/calculator";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import "../App.css";

class CalculatorComponent extends Component {
  render() {
    return (
      <div className="center">
        <Calculator />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorComponent);
