import React from "react";
import data from "../../../data";
// import NumberButton from "../NumberButtons/NumberButton";
import SpecialButton from "../SpecialButtons/SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div className="contspecials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {data.specials.map((e, index) => {
        return <SpecialButton key={index} char={e} />;
      })}
    </div>
  );
};

export default Specials;
