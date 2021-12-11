import React,  {useState } from "react";
import { Dropdown, Option } from "./Dropdown.js";
import './Scorepredictor.css';
const ScorePredictor = () => {
    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
    
  };
    return (
        <div className= "Container">
          <h1>Which Teams Are You Insterested To Predict?</h1>
          <div className="groups">
          <Dropdown
            formLabel="Choose Home Team"
            buttonText="Submit Home Team"
            onChange={handleSelect}
            action="https://jsonplaceholder.typicode.com/posts"
          >
            <Option selected value="Click to see options" />
            <Option value="Sunderland" />
            <Option value="Chelsea" />
            <Option value="Wolverhampton Wanderers" />
            <Option value="Everton" />
            <Option value="Birmingham City" />
            <Option value="West Bromwich Albion" />
            <Option value="Stoke City" />
            <Option value="Fulham" />
            <Option value="Manchester City" />
            <Option value="Arsenal" />
            <Option value="Newcastle United" />
            <Option value="West Ham United" />
            <Option value="Manchester United" />
            <Option value="Aston Villa" />
            <Option value="Tottenham Hotspur" />
            <Option value="Liverpool" />
            <Option value="Swansea City" />
            <Option value="Norwich City" />
            <Option value="Queens Park Rangers" />
            <Option value="Southampton" />

          </Dropdown>
          <p>You selected {optionValue} </p>
          </div>
          <div className="groups">
          <Dropdown
            formLabel="Choose Away Team"
            buttonText="Submit Away Team"
            onChange={handleSelect}
            action="https://jsonplaceholder.typicode.com/posts"
          >
            <Option selected value="Click to see options" />
            <Option value="Sunderland" />
            <Option value="Chelsea" />
            <Option value="Wolverhampton Wanderers" />
            <Option value="Everton" />
            <Option value="Birmingham City" />
            <Option value="West Bromwich Albion" />
            <Option value="Stoke City" />
            <Option value="Fulham" />
            <Option value="Manchester City" />
            <Option value="Arsenal" />
            <Option value="Newcastle United" />
            <Option value="West Ham United" />
            <Option value="Manchester United" />
            <Option value="Aston Villa" />
            <Option value="Tottenham Hotspur" />
            <Option value="Liverpool" />
            <Option value="Swansea City" />
            <Option value="Norwich City" />
            <Option value="Queens Park Rangers" />
            <Option value="Southampton" />

          </Dropdown>
          <p>You selected {optionValue} </p>
        </div>
        </div>
      );  
   
};
 
export default ScorePredictor;

