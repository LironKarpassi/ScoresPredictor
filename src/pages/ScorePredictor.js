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
  const [isLoading, setIsLoading] = useState(false);
  
  const [result, setResult] = useState("");

  const togglePopup = () => {
    setIsOpen(false);
    setIsLoading(false);
  };
  const getData = async () => {

    if(optionValue === "Click to see options" || optionValue1 === "Click to see options"
    || optionValue1 === ""  || optionValue === "") {
      alert('Please select a team.');
      return;
    }
    else if(optionValue1 === optionValue) {
      alert('Cannot select same team.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => fetch("https://f5g8f09fqf.execute-api.us-east-1.amazonaws.com/beta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        home_team: optionValue,
        away_team: optionValue1,
      }),
    })
      .then((response) => response.json())
      .then((json) => {

        if(json.statusCode === 200) {
          setResult(json.body)
          
        }
        else {
          setResult("Error: Can't get information from server.");
        }

      })
      .then(() => {
        setIsLoading(false);
          setIsOpen(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      }), 5000);
  };

  return (
    <div className="main">
      <h1 className="titleofpage">Which Teams Are You Insterested To Predict?</h1>
      <div className="group1">
        <Dropdown className="dropdowncss" formLabel="Choose Home Team" onChange={handleSelect}>
          <Option value="Click to see options" />
          <Option value="West Ham United" />
          <Option value="Aston Villa" />
          <Option value="Swansea City" />
          <Option value="Watford" />
          <Option value="Sunderland" />
          <Option value="Tottenham Hotspur" />
          <Option value="Southampton" />
          <Option value="Crystal Palace" />
          <Option value="Liverpool" />
          <Option value="Manchester City" />
          <Option value="Everton" />
          <Option value="West Bromwich Albion" />
          <Option value="Newcastle United" />
          <Option value="Chelsea" />
          <Option value="Manchester United" />
          <Option value="Norwich City" />
          <Option value="Stoke City" />
          <Option value="Bournemouth" />
          <Option value="Arsenal" />
          <Option value="Leicester City" />
        </Dropdown>
        <p>You selected {optionValue} </p>
      </div>
      
      <div className="group2">
        <Dropdown className="dropdowncss" formLabel="Choose Away Team" onChange={handleSelect1}>
          <Option value="Click to see options" />
          <Option value="West Ham United" />
          <Option value="Aston Villa" />
          <Option value="Swansea City" />
          <Option value="Watford" />
          <Option value="Sunderland" />
          <Option value="Tottenham Hotspur" />
          <Option value="Southampton" />
          <Option value="Crystal Palace" />
          <Option value="Liverpool" />
          <Option value="Manchester City" />
          <Option value="Everton" />
          <Option value="West Bromwich Albion" />
          <Option value="Newcastle United" />
          <Option value="Chelsea" />
          <Option value="Manchester United" />
          <Option value="Norwich City" />
          <Option value="Stoke City" />
          <Option value="Bournemouth" />
          <Option value="Arsenal" />
          <Option value="Leicester City" />
        </Dropdown>
        <p>You selected {optionValue1} </p>
      </div>
      <span className="submit" onClick={getData}>
        {isLoading === true ? <PreLoaded /> : "Lets Predict The Score"}
      </span>

      {isOpen === true && (
        <Popup
          content={
            <React.Fragment>
            {result.startsWith("Error") ? <b><h1 className="TitleOfRES">{result}</h1></b> : (
              <React.Fragment>
              <b>
                <h1 className="TitleOfRES"> Our Algorithm Predict That</h1>
              </b>
              <p>There Is A {result.substring(1).substring(0, result.length-2)}</p> <br />
              <p>That The Home Team Is Going To Win</p>
              </React.Fragment>
              )}
            </React.Fragment>
            }
          handleClose={togglePopup}
        />
      )}
       </div>
    
  );
};

export default ScorePredictor;
