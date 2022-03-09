import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";

class OpperationButton extends Component {
  constructor(props) {
    super(props);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(event) {
    let display = document.getElementById(this.props.id);

      this.props.addDecimal(false);
      this.props.clearZeros();
      this.props.addOpperator(true);
      this.props.updateUpperDisplay(this.props.op);
      this.props.clearLowerDisplay();
      this.props.updateLowerDisplay(this.props.op);
      if (display.id === "equals") {
        this.props.expEvaluated(true);

        const convertToString = this.props.upperDisplay.toString();
        var cleanedExpression = convertToString.replace(/,/g, "");

        var calculateExp = Function(";return (" + cleanedExpression + ")")();
        //console.log(calculateExp);
        var cleanUpperDisplay = cleanedExpression.replace(/=/g, "");
        this.props.clearUpperDisplay();

        if (this.props.evaluated) {
          this.props.updateUpperDisplay(calculateExp);
          this.props.updateLowerDisplay(calculateExp);
          this.props.addOpperator(false);
        } else {
          this.props.updateUpperDisplay(cleanUpperDisplay);
          this.props.updateLowerDisplay(calculateExp);
          this.props.addOpperator(false);
        }
      }
    
  }

  render() {
    return (
      <button
        className="opperationButton"
        id={this.props.id}
        op={this.props.op}
        onClick={(event) => {
          this.updateDisplay(event);
        }}
      >
        {this.props.op}
      </button>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OpperationButton);
