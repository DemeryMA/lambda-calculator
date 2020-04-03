// import React from "react";

// const OperatorButton = (props) => {
//  console.log(props);
//   return (
//     <button className = "operatorButtons" onClick={()=> { props.addOperator(props.text.value)}}>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//     {props.text.char}
//     </button>
//   );
// };

// export default OperatorButton;

import React from "react";

const OperatorButton = (props) => {
  return (
    <button  className ="operator button" onClick={()=>{props.handleOperatorClick(props.text.value)}}>
      {props.text.char}
    </button>
  );
};
export default OperatorButton;
