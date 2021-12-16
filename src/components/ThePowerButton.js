import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";

class PowerButton extends Component {
  constructor(props) {
    super(props);
    this.handlePower = this.handlePower.bind(this);
  }
  handlePower(e) {
    this.props.onChangePower();
    this.props.clearLowerDisplay();
    this.props.clearUpperDisplay();
  }

  render() {
    return (
      <div className="power-button" onClick={this.handlePower}>
        <span className="material-icons-outlined">Reset</span>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PowerButton);
