import React, {useState} from "react";
import NumberButton from "./NumberButton";
import {numbers} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  return (
    <div className="numberButtons">
      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       {buttonNumbers.map((item, index) => { 
         return <NumberButton key={index} text={item}/>;
       })}
       
    </div>
  );
};

export default Numbers; 