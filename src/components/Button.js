import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onKeyPress={props.action} onClick={props.action}>{props.buttonTitle}</button>
    </div>
  );
};

export default Button;
