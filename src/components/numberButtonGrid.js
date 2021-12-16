import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";
import { numberList } from "./buttonsTops";
import NumberButton from "./numberButton";

class NumberButtonGrid extends Component {
  constructor(props) {
    super(props);
    this.decimal = this.decimal.bind(this);
  }
  decimal(event) {
    if (!this.props.decimal) {
      this.props.clearZeros();
      this.props.addDecimal(true);
      this.props.updateUpperDisplay(".");
      this.props.updateLowerDisplay(".");
      this.props.addOpperator(false);
    }
    console.log(this.props.power);
  }

  render() {
    //for every sound on the current list of sounds, create a drum button for it and attach the meta data.
    let NumberButtonGrid = numberList.map((number) => {
      return <NumberButton key={number.id} id={number.id} num={number.num} />;
    });

    let PowerOff = <div>Power is off</div>;
    const Display = this.props.power ? NumberButtonGrid : PowerOff;
    //Return a grid containing all the buttons
    return (
      <div className="center number-grid">
        {Display}
        <button
          onClick={(event) => {
            this.decimal(event);
          }}
          id="decimal"
        >
          .
        </button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NumberButtonGrid);
