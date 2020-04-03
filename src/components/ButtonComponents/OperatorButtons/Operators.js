// import React, {useState} from "react";
// import OperatorButton from "./OperatorButton";
// import {operators} from "../../../data";

// //import any components needed

// //Import your array data to from the provided data file

// const Operators = (props) => {
//   // STEP 2 - add the imported data to state
//   const [operatorButton] = useState(operators);
//   return (
//     <div className="operatorContainer">

       
//        {operatorButton.map((item, index) => { 
//          return <OperatorButton key={index} text={item} addOperator = {props.addOperator}/>;
//        })}
//     </div>
//   );
// };

// export default Operators; 

import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';



const Operators = (props) => {
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="operatorButtons">
    {operatorState.map((item,index)=>{

      return <OperatorButton key={index} text={item} handleOperatorClick={props.handleOperatorClick}/>;
    })}
    
    </div>
  );
};



export default Operators;