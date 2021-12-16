import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown.js";
import "./Scorepredictor.css";
import Popup from "./PopUp";
import PreLoaded from "./PreLoaded.js";

const ScorePredictor = () => {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
  const [optionValue1, setOptionValue1] = useState("");
  const handleSelect1 = (e) => {
    console.log(e.target.value);
    setOptionValue1(e.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const getData = () => {

    setTimeout(() => setIsOpen(true), 1000);
    setTimeout(() => setIsLoading(true), 1000);

    setTimeout(() => fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
    }), 5000)
  };

  return (
    <div>
      <h1>Which Teams Are You Insterested To Predict?</h1>
      <div className="group1">
        <Dropdown formLabel="Choose Home Team" onChange={handleSelect}>
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
      <div className="vs">VS</div>
      <div className="group2">
        <Dropdown formLabel="Choose Away Team" onChange={handleSelect1}>
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
        <p>You selected {optionValue1} </p>
      </div>
      <span className="submit" onClick={getData}>
      {isLoading && isOpen ? (
          <PreLoaded />
        ) : 
          isOpen ? (
            <Popup
              content={
                <>
                  <b>
                    <h1>And The Resaults Are...</h1>
                  </b>
                  <p>blablabla</p>
                </>
              }
              handleClose={togglePopup}
            />
          )
         : 'Lets predict the result'}
      </span>
  
      </div>
  );
};

export default ScorePredictor;
