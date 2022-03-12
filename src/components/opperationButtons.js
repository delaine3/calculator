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
      console.log("IN THE FILTER")

    filterOpperators.pop()

      //console.log("filterOpperators last element : " + filterOpperators[filterOpperators.length -1])
      
      var filtered = display.filter(function(value, index, arr){ 
        //console.log(filterOpperators.indexOf(value))
        return !(filterOpperators.includes(value)) ;
    });
   console.log("FILTERED STUFF = "+ filtered)
    this.props.updateUpperDisplay(filtered);
    this.props.clearLowerDisplay()
    }
  }

  updateDisplay(event) {
    let display = document.getElementById(this.props.id);
      let lowerDisplay = this.props.lowerDisplay.toString().replace(/,/g, "")
      let upperDisplay = this.props.upperDisplay
      console.log("Upper display " +upperDisplay)
      console.log("Lower display " +lowerDisplay)

      this.checkRegex(this.props.lowerDisplay)

      this.props.updateLowerDisplay(this.props.op);


      if (display.id === "equals") {
       // console.log("Lower Display " + lowerDisplay)
      // this.checkRegex(this.props.lowerDisplay)
        
      let myRegex6 =/^\d+[*]-[+]\d+/
      let myRegex7 = /^\d+[+][+]\d+/g

      var currDisplay = this.props.lowerDisplay.toString().replace(/,/g, "")
        console.log("CURR DISPLAY " + currDisplay)
      if(myRegex6.test(currDisplay) ){
        console.log("TEST **2** IS *******SO**** TRUE")
        let opperators = ["+","*", "/","-"];
  
        const filterOpperators1 = this.props.lowerDisplay.filter(value=>opperators.includes(value));
        console.log("FILTERED OUT LOWER DISPLAY " + filterOpperators1)
        
      filterOpperators1.pop()
       console.log(filterOpperators1)
        //console.log("filterOpperators last element : " + filterOpperators[filterOpperators.length -1])
        
        var filtered1 = this.props.lowerDisplay.filter(function(value, index, arr){ 
          //console.log(filterOpperators.indexOf(value))
          return !(filterOpperators1.includes(value)) ;
      });
     console.log("FILTERED1 " + filtered1)
     // this.props.updateUpperDisplay(filtered1);
   //   this.props.clearLowerDisplay()
    //  console.log("LOWER DISPLAY *: " + this.props.lowerDisplay)
    //  console.log("UPPER DISPLAY *: " + this.props.upperDisplay)
  
     // console.log("FILTERED1 "+filtered1)
     // console.log(this.props.lowerDisplay)
      let calc = filtered1.toString().replace(/,/g, "")
      console.log("FINAL CALCULATION "+calc)
      var calculateExp1 = Function(";return (" + calc + ")")();
          //console.log(calculateExp);
          this.props.clearLowerDisplay();
          this.props.updateLowerDisplay(calculateExp1);
      return
    }
    
    if(myRegex7.test(currDisplay)){
      let opperators = ["+","*", "/","-"];

      const filterOpperators1 = this.props.lowerDisplay.filter(value=>opperators.includes(value));
        console.log("FILTERED OUT LOWER DISPLAY OP ++++ " + filterOpperators1)
        
      filterOpperators1.pop()
       console.log(filterOpperators1)

      const indexOfOp = this.props.lowerDisplay.indexOf(filterOpperators1.toString())

      console.log("INDEX OF OP "+indexOfOp)



      let finalFilter = currDisplay.replace(filterOpperators1.toString(),"")
      console.log("FINAL FILTER " + finalFilter)
   // this.props.updateUpperDisplay(filtered1);
  //   this.props.clearLowerDisplay()
 //  console.log("LOWER DISPLAY *: " + this.props.lowerDisplay)
  //  console.log("UPPER DISPLAY *: " + this.props.upperDisplay)

   // console.log("FILTERED1 "+filtered1)
   // console.log(this.props.lowerDisplay)
    let calc = finalFilter
    console.log("FINAL CALCULATION "+calc)
    var calculateExp1 = Function(";return (" + calc + ")")();
        //console.log(calculateExp);
        this.props.clearLowerDisplay();
        this.props.updateLowerDisplay(calculateExp1);
    return
  }

        this.props.expEvaluated(true);
        const convertToString = this.props.upperDisplay.toString();
        console.log("UPPER DISPLAY "+upperDisplay)

        console.log("LOWER DISPLAY " + lowerDisplay)

        var cleanedExpression = convertToString.replace(/,/g, "")+lowerDisplay;
        console.log("CLEANED EXPRESSION "+cleanedExpression)

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
