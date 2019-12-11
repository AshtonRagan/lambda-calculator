import React from "react";

const Display = props => {
  return (
    <div className="display">
      {/* Display any props data here */}
      {props.value}
    </div>
  );
};

export default Display;
