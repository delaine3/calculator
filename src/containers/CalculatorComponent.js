import React, { Component } from "react";
import { connect } from "react-redux";
import Calculator from "../components/calculator";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import "../App.css";

class CalculatorComponent extends Component {
  render() {
    return (
      <div className="center">
        <p className="blurb">This is a calculator created using React and Redux. Click on the buttons to opperate. <br/> This calculator is one of the challeneges on The Free Code Camp. To test it, find and select "Javascript Calculator" in the Test Suite in the top left. Click "Run Tests" to see how many test cases it passes.</p>
        <Calculator />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorComponent);
