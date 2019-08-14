import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = () => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
{props.text}   
    </button>
  );
};

export default SpecialButton;
