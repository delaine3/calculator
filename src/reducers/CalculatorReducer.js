const initialState = {
  power: true,
  lowerDisplay: [],
  upperDisplay: [],
  opperator: false,
  evaluated: false,
  decimal: false,
  zeros: "",
};

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

function CalculatorReducer(state = initialState, action) {
  switch (action.type) {
    case POWER:
      return { ...state, power: !action.power };
    case ADDZEROS:
      return { ...state, zeros: state.zeros + action.zeros };
    case CLEARZEROS:
      return { ...state, zeros: "" };
    case DECIMAL:
      return { ...state, decimal: action.decimal };
    case EVALUATED:
      return { ...state, evaluated: !action.evaluated };
    case CLEARLOWERDISPLAY:
      return { ...state, lowerDisplay: [] };
    case CLEARUPPERDISPLAY:
      return { ...state, upperDisplay: [] };
    case LOWERDISPLAY:
      return {
        ...state,
        lowerDisplay: [...state.lowerDisplay, action.lowerDisplay],
      };
    case UPPERDISPLAY:
      return {
        ...state,
        upperDisplay: [...state.upperDisplay, action.upperDisplay],
      };
    case OPPERATORADDED:
      return {
        ...state,
        opperator: action.opperator,
      };
    default:
      return state;
  }
}

export default CalculatorReducer;
