// import React from "react";



// const SpecialButton = (props) => {
//   return (
//     <button className = "specialButtons" onClick={()=>props.handleSpecialClick(props.text)}>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
// {props.text}   
//     </button>
//   );
// };

// export default SpecialButton;

import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special button" onClick={()=>props.handleSpecialClick(props.text)}>
      {props.text}
    </button>
  );
};
export default SpecialButton;