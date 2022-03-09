import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";
import { opperationList } from "./buttonsTops";
import OpperationButton from "./opperationButtons";

class OpperationButtonGrid extends Component {
 
  clearDisplay(event) {
    this.props.clearLowerDisplay();
    this.props.clearUpperDisplay();
    this.props.expEvaluated(false);
    this.props.updateUpperDisplay();
    this.props.updateLowerDisplay();
  }
  render() {
    let OpperationButtonGrid = opperationList.map((opperation) => {
      return <OpperationButton op={opperation.op} id={opperation.id} key={opperation.id} />;
    });

    let PowerOff = <div></div>;
    const Display = this.props.power ? OpperationButtonGrid : PowerOff;
    //Return a grid containing all the buttons
    return (
      <div className="center number-grid">
        {Display}
        <button
          onClick={(event) => {
            this.clearDisplay(event);
          }}
          id="clear"
          key={"clear"}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpperationButtonGrid);
