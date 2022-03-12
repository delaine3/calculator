import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";

class NumberButton extends Component {
  constructor(props) {
    super(props);
    this.updateDisplay = this.updateDisplay.bind(this);

    this.state = {
     zeros: []
    }
  }

  updateDisplay(event) {

    if(event.target.id === "decimal"){

      if(!(this.props.lowerDisplay.includes("."))) {

       // this.props.updateUpperDisplay(".");
        this.props.updateLowerDisplay(".");
        this.props.addOpperator(false);
        
        return
      }else{
        return
      }
    }
    const totalZeros = this.state.zeros + 1;
    if(event.target.id === "zero"){

      if((this.props.lowerDisplay.length < 2   )){
       if((this.props.lowerDisplay[0] == 0) || (this.props.lowerDisplay[0] == undefined)){
   
          return
        }else{

          this.setState({zeros: totalZeros});
          this.props.updateLowerDisplay("0");
          this.props.addOpperator(false);
          return
        }
      }else{
        this.props.updateLowerDisplay(this.props.num);
        this.props.addOpperator(false);
        return
      }
    }
     // this.props.updateUpperDisplay(this.props.num);
     this.props.updateLowerDisplay(this.props.num);
      this.props.addOpperator(false);
    

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
