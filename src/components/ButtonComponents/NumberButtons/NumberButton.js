// import React from "react";

// const NumberButton = (props) => {
//   console.log("NumberButtons, props");
//   return (
//     <button className = "numberButtons" onClick={()=> { props.addNumber(props.text)}}>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//     {props.text}
//     </button>
//   );
// };

// export default NumberButton; 

import React from "react";

const NumberButton = (props) => {
  return (
    <button className={props.text=="0" ? "number button zero" : "number button"} onClick={()=>{props.handleNumberClick(props.text)}}>
      {props.text}
    </button>
  );
};
export default NumberButton;
