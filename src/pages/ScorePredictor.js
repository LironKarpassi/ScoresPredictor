import React,  {useState } from "react";
import { Dropdown, Option } from "./Dropdown.js";

const ScorePredictor = () => {
    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
    return (
        <div>
          <h1>Which Groups Are You Insterested To Predict?</h1>
          <Dropdown
            formLabel="Choose a group"
            buttonText="Send form"
            onChange={handleSelect}
            action="https://jsonplaceholder.typicode.com/posts"
          >
            <Option selected value="Click to see options" />
            <Option value="Option 1" />
            <Option value="Option 2" />
            <Option value="Option 3" />
            <Option value="Option 4" />
            <Option value="Option 5" />
            <Option value="Option 6" />
            <Option value="Option 7" />
            <Option value="Option 8" />
            <Option value="Option 9" />
            <Option value="Option 10" />
            <Option value="Option 11" />
            <Option value="Option 12" />
            <Option value="Option 13" />
            <Option value="Option 14" />
            <Option value="Option 15" />
            <Option value="Option 16" />
            <Option value="Option 17" />
            <Option value="Option 18" />
            <Option value="Option 19" />
            <Option value="Option 20" />

          </Dropdown>
          <p>You selected {optionValue} </p>
          <Dropdown
            formLabel="VS Choose a group"
            buttonText="Send form"
            onChange={handleSelect}
            action="https://jsonplaceholder.typicode.com/posts"
          >
            <Option selected value="Click to see options" />
            <Option value="Option 1" />
            <Option value="Option 2" />
            <Option value="Option 3" />
            <Option value="Option 4" />
            <Option value="Option 5" />
            <Option value="Option 6" />
            <Option value="Option 7" />
            <Option value="Option 8" />
            <Option value="Option 9" />
            <Option value="Option 10" />
            <Option value="Option 11" />
            <Option value="Option 12" />
            <Option value="Option 13" />
            <Option value="Option 14" />
            <Option value="Option 15" />
            <Option value="Option 16" />
            <Option value="Option 17" />
            <Option value="Option 18" />
            <Option value="Option 19" />
            <Option value="Option 20" />

          </Dropdown>
          <p>You selected {optionValue} </p>
        </div>
      );  
   
};
 
export default ScorePredictor;

