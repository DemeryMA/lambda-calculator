// import React, {useState} from "react";
// import SpecialButton from "./SpecialButton";
// import {specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

// const Specials = (props) => {
//   // STEP 2 - add the imported data to state
// const [specialButton] = useState(specials);
//   return (
//     <div>
  
//            {specialButton.map((item, index) => { 
//          return <SpecialButton key={index} text={item} handleSpecialClick={props.handleSpecialClick} className= "specialButtons" />;
//        })}
//     </div>
//   );
// };

// export default Specials; 

import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';

const Specials = (props) => {
  const [button, setButton] = useState(specials);
  return (
    <div className="specialButtons">
    {button.map((item,index)=>{
      return <SpecialButton key={index} text={item} handleSpecialClick={props.handleSpecialClick}/>;
    })}

    </div>
  );
};


export default Specials;
