import React, {useState} from "react";
import NumberButton from "./NumberButton";
import {numbers} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  console.log("Numbers", props);
  return (
    <div className="numberContainer">

       {buttonNumbers.map((item, index) => { 
         return <NumberButton key={index} text={item} addNumber = {props.addNumber}/>;
       })}
       
    </div>
  );
};

export default Numbers; 