import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorButton, setOperatorButton] = useState(operators);
  return (
    <div className="operatorButtons">

       
       {operatorButton.map((item, index) => { 
         return <OperatorButton key={index} text={item} addOperator = {props.addOperator}/>;
       })}
    </div>
  );
};

export default Operators; 
