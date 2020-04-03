// import React, {useState} from "react";
// import NumberButton from "./NumberButton";
// import {numbers} from "../../../data";

// //import any components needed

// //Import your array data to from the provided data file

// const Numbers = (props) => {
//   // STEP 2 - add the imported data to state
//   const [buttonNumbers] = useState(numbers);
//   console.log("Numbers", props);
//   return (
//     <div className="numberContainer">

//        {buttonNumbers.map((item, index) => { 
//          return <NumberButton key={index} text={item} addNumber = {props.addNumber}/>;
//        })}
       
//     </div>
//   );
// };

// export default Numbers; 

  
import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = (props) => {

  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numberButtons">
      {numberState.map((item, index) => {
        return <NumberButton key={index} text={item} handleNumberClick={props.handleNumberClick}/>;
      })}
    </div>
  );
};

export default Numbers;