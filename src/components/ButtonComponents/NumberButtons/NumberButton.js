import React, { useState } from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className="number"
        onClick={() => {
          props.funct(props.buttonNumber);
        }}
      >
        {props.buttonNumber}
      </button>
    </>
  );
};

export default NumberButton;
