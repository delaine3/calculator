import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";

class NumberButton extends Component {
  constructor(props) {
    super(props);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(event) {
    let zeroRegex2 = /^0\d+/gm;
    //If the number in the upper display starts with a 0 followed by digits, drop a zero
    if (zeroRegex2.test(this.props.upperDisplay)) {
      this.props.updateUpperDisplay(this.props.lowerDisplay.shift());
      this.props.updateLowerDisplay(this.props.upperDisplay.shift());
    }
    //add to the 0's list, whatever number has  been clicked
    this.props.addZeros(this.props.num);
    //If the number in the zeros tracker does not start with a 0, update the display
    let zeroRegex = /^0{1}/gm;
    if (!zeroRegex.test(this.props.zeros)) {
      this.props.updateUpperDisplay(this.props.num);
      this.props.updateLowerDisplay(this.props.num);
      this.props.addOpperator(false);
    } else {
    }
  }
  render() {
    return (
      <button
        id={this.props.id}
        num={this.props.num}
        onClick={(event) => {
          this.updateDisplay(event);
        }}
      >
        {this.props.num}
      </button>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NumberButton);
