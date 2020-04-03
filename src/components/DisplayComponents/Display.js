// import React from "react";

// const Display = (props) => {
//  console.log("Display", props, props.number);
 
//  return <div className="display">{/* Display any props data here */}
//  {props.number}
//   </div>;
// };

// export default Display; 

import React from "react";

const Display = (props) => {
  return <div className="display">
  <div className="displayContent">
  {props.display}
  </div>
  
  </div>;
};

export default Display;
