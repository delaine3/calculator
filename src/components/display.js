import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";

class Display extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let empty = <div></div>;
    let upperDisplay = this.props.power ? this.props.upperDisplay : empty;
    let lowerDisplay = this.props.power ? this.props.lowerDisplay : empty;

    return (
      <div className="center" >
        <div className="upperDisplay"  >
          {upperDisplay != "" ? upperDisplay : "0"}
        </div>
        <div className="lowerDisplay" id="display" >
          {lowerDisplay != "" ? lowerDisplay : "0"}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Display);
