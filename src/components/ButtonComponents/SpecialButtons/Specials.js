import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
const [specialButton] = useState(specials);
  return (
    <div>
  
           {specialButton.map((item, index) => { 
         return <SpecialButton key={index} text={item} className= "specialButtons" />;
       })}
    </div>
  );
};

export default Specials; 
