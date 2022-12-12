import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      // onClick props 추가
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
