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

    //console.log("Lower Display list : " + this.props.lowerDisplay)
    //console.log("Lower Display last element : " + this.props.lowerDisplay[this.props.lowerDisplay.length -1])
    //console.log("Lower Display 1st element : " +this.props.lowerDisplay[0])
    //console.log("id = " + event.target.id)

    if(event.target.id === "decimal"){

      if(!(this.props.lowerDisplay.includes("."))) {

        this.props.updateUpperDisplay(".");
        this.props.updateLowerDisplay(".");
        this.props.addOpperator(false);
        
        return
      }else{
        return
      }
    }
    const totalZeros = this.state.zeros + 1;
console.log("fIRST ELEMENT : " + this.props.lowerDisplay[0] )
    if(event.target.id === "zero"){
      console.log("wE HAVE A " + event.target.id)
      //console.log("First Item In Lower Display " + this.props.lowerDisplay[0] )
    console.log("Lower Display LENGHT : " +this.props.lowerDisplay.length)

      if((this.props.lowerDisplay.length < 2   )){
        console.log('Less than 2')
       if((this.props.lowerDisplay[0] == 0) || (this.props.lowerDisplay[0] == undefined)){
  
       console.log('lowerDisplay[0] == 0 or Undefined ')
 
          return
        }else{

          this.setState({zeros: totalZeros});
         this.props.updateUpperDisplay("0");
          this.props.updateLowerDisplay("0");
          this.props.addOpperator(false);
          return
        }
      }else{
       this.props.updateUpperDisplay(this.props.num);
        this.props.updateLowerDisplay(this.props.num);
        this.props.addOpperator(false);
        return
      }
    }
      this.props.updateUpperDisplay(this.props.num);
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
