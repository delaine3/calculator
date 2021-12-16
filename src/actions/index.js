const POWER = "POWER";
const OPPERATORADDED = "OPPERATORADDED";
const EVALUATED = "EVALUATED";
const CLEARLOWERDISPLAY = "CLEARLOWERDISPLAY";
const CLEARUPPERDISPLAY = "CLEARUPPERDISPLAY";
const LOWERDISPLAY = "LOWERDISPLAY";
const UPPERDISPLAY = "UPPERDISPLAY";
const DECIMAL = "DECIMAL";
const ADDZEROS = "ADDZEROS";
const CLEARZEROS = "CLEARZEROS";

export const clearZeros = (zeros) => {
  return {
    type: CLEARZEROS,
    zeros: zeros,
  };
};

export const addZeros = (zeros) => {
  return {
    type: ADDZEROS,
    zeros: zeros,
  };
};

export const addDecimal = (decimal) => {
  return {
    type: DECIMAL,
    decimal: decimal,
  };
};

export const clearLowerDisplay = (display) => {
  return {
    type: CLEARLOWERDISPLAY,
    display: display,
  };
};

export const addOpperator = (opperator) => {
  return {
    type: OPPERATORADDED,
    opperator: opperator,
  };
};

export const expEvaluated = (expression) => {
  return {
    type: EVALUATED,
    evaluated: false,
  };
};

export const clearUpperDisplay = (display) => {
  return {
    type: CLEARUPPERDISPLAY,
    display: display,
  };
};

export const updateLowerDisplay = (newNumber) => {
  return {
    type: LOWERDISPLAY,
    lowerDisplay: newNumber,
  };
};

export const updateUpperDisplay = (newNumber) => {
  return {
    type: UPPERDISPLAY,
    upperDisplay: newNumber,
  };
};

export const changePower = (currentState) => {
  return {
    type: POWER,
    power: currentState,
  };
};

export const mapStateToProps = (state) => {
  return {
    power: state.counter.power,
    lowerDisplay: state.counter.lowerDisplay,
    upperDisplay: state.counter.upperDisplay,
    opperator: state.counter.opperator,
    evaluated: state.counter.evaluated,
    decimal: state.counter.decimal,
    zeros: state.counter.zeros,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    clearZeros: (zeros) => {
      dispatch(clearZeros(zeros));
    },
    addZeros: (zeros) => {
      dispatch(addZeros(zeros));
    },
    expEvaluated: (expression) => {
      dispatch(expEvaluated(expression));
    },
    addOpperator: (opperator) => {
      dispatch(addOpperator(opperator));
    },
    clearLowerDisplay: (currentDisplay) => {
      dispatch(clearLowerDisplay(currentDisplay));
    },
    clearUpperDisplay: (currentDisplay) => {
      dispatch(clearUpperDisplay(currentDisplay));
    },
    onChangePower: (currentState) => {
      dispatch(changePower(currentState));
    },
    updateLowerDisplay: (newNumber) => {
      dispatch(updateLowerDisplay(newNumber));
    },
    updateUpperDisplay: (contents) => {
      dispatch(updateUpperDisplay(contents));
    },
    addDecimal: (decimal) => {
      dispatch(addDecimal(decimal));
    },
  };
};
