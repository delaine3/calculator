import React, { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/index";
import { connect } from "react-redux";

class OpperationButton extends Component {
  constructor(props) {
    super(props);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  checkRegex(display){

    let myRegex1 = /^\d+-?[*+/]+\d+/g 
    let myRegex2 = /^[*+/]\d+/g
    let myRegex3 = /^\d+-\d+/g
    let myRegex4 = /^[-+*/]+\d+[+*/]+\d+/g
    let myRegex5 = /^\d+[.]\d+/g
    var currDisplay = display.toString().replace(/,/g, "")

    if(myRegex1.test(currDisplay)||myRegex2.test(currDisplay)||myRegex3.test(currDisplay)||myRegex4.test(currDisplay)||myRegex5.test(currDisplay)){
      let opperators = ["+","*", "/"];

      const filterOpperators = display.filter(value=>opperators.includes(value));

    filterOpperators.pop()

      var filtered = display.filter(function(value, index, arr){ 
        return !(filterOpperators.includes(value)) ;
    });
    
    this.props.updateUpperDisplay(filtered);
    this.props.clearLowerDisplay()
    }
  }

  updateDisplay(event) {
    let display = document.getElementById(this.props.id);
      let lowerDisplay = this.props.lowerDisplay.toString().replace(/,/g, "")

      this.checkRegex(this.props.lowerDisplay)

      this.props.updateLowerDisplay(this.props.op);


      if (display.id === "equals") {
   
      let myRegex6 =/^\d+[*]-[+]\d+/
      let myRegex7 = /^\d+[+][+]\d+/g

      var currDisplay = this.props.lowerDisplay.toString().replace(/,/g, "")
      if(myRegex6.test(currDisplay) ){
        let opperators = ["+","*", "/","-"];
  
        const filterOpperators1 = this.props.lowerDisplay.filter(value=>opperators.includes(value));
        
      filterOpperators1.pop()
        
        var filtered1 = this.props.lowerDisplay.filter(function(value, index, arr){ 
          return !(filterOpperators1.includes(value)) ;
      });

      let calc = filtered1.toString().replace(/,/g, "")
      var calculateExp1 = Function(";return (" + calc + ")")();
          this.props.clearLowerDisplay();
          this.props.updateLowerDisplay(calculateExp1);
      return
    }
    
    if(myRegex7.test(currDisplay)){
      let opperators = ["+","*", "/","-"];

      const filterOpperators1 = this.props.lowerDisplay.filter(value=>opperators.includes(value));
        
      filterOpperators1.pop()

      let finalFilter = currDisplay.replace(filterOpperators1.toString(),"")
 
    let calc = finalFilter
    var calculateExp1 = Function(";return (" + calc + ")")();
        this.props.clearLowerDisplay();
        this.props.updateLowerDisplay(calculateExp1);
    return
  }

        this.props.expEvaluated(true);
        const convertToString = this.props.upperDisplay.toString();

        var cleanedExpression = convertToString.replace(/,/g, "")+lowerDisplay;

        var calculateExp = Function(";return (" + cleanedExpression + ")")();
        this.props.clearUpperDisplay();
        this.props.clearLowerDisplay()

  
          this.props.clearUpperDisplay();
          this.props.updateLowerDisplay(calculateExp);
          this.props.addOpperator(false);
        
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
