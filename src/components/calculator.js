import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";
import Display from "./display";
import PowerButton from "./ThePowerButton.js";
import OpperationButtonGrid from "./opperationButtonGrid";
import NumberButtonGrid from "./numberButtonGrid";

class Calculator extends Component {
 

  render() {
    const isOn = (
      <div className="outer-grid">
        <br />
        <Display />
        <br />
        <OpperationButtonGrid />
        <NumberButtonGrid />
        <div className="controls"></div>
      </div>
    );

    const isOff = <div></div>;

    const powerState = this.props.power ? isOn : isOff;
    return (
      <div className="app center">
        <div>
          <PowerButton />

          <br />
          <label>React & Redux Calculator</label>

          {powerState}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
