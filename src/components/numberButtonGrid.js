import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";
import { numberList } from "./buttonsTops";
import NumberButton from "./numberButton";

class NumberButtonGrid extends Component {

  render() {
    //for every item on the current list of items, create a button for it and attach the meta data.
    let NumberButtonGrid = numberList.map((number) => {
      return <NumberButton key={number.id} id={number.id} num={number.num} />;
    });

    let PowerOff = <div>Power is off</div>;
    const Display = this.props.power ? NumberButtonGrid : PowerOff;
    //Return a grid containing all the buttons
    return (
      <div className="center number-grid">
        {Display}
       
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NumberButtonGrid);
