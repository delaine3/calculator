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
      this.props.updateUpperDisplay(this.props.op);
      this.props.updateLowerDisplay(this.props.op);
      this.props.clearLowerDisplay();

      if (display.id === "equals") {
        this.props.expEvaluated(true);
        this.props.clearLowerDisplay();

        let opperators = ["+","*", "/"];

        const filterOpperators = this.props.upperDisplay.filter(value=>opperators.includes(value));
        console.log(filterOpperators)

      filterOpperators.pop()
       

        console.log("filterOpperators last element : " + filterOpperators[filterOpperators.length -1])
        
        var filtered = this.props.upperDisplay.filter(function(value, index, arr){ 
          //console.log(filterOpperators.indexOf(value))
          return !(filterOpperators.includes(value)) ;
      });
      
        console.log("FILTERED UPPER DISPLAY : " +filtered)
        console.log("UPPER DISPLAY : " +  this.props.upperDisplay)

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
