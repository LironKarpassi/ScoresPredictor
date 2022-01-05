import React, { useState , useEffect} from "react";
import { Dropdown, Option } from "./Dropdown.js";
import "./Scorepredictor.css";
import Popup from "./PopUp";
import PreLoaded from "./PreLoaded.js";
import West_Ham_United from './images/West_Ham_United.png'
import Aston_Villa from './images/Aston_Villa.png'
import Swansea_City from './images/Swansea_City.png'
import Watford from './images/Watford.png'
import Sunderland from './images/Sunderland.png'
import Tottenham_Hotspur from './images/Tottenham_Hotspur.png'
import Southampton from './images/Southampton.png'
import Crystal_Palace from './images/Crystal_Palace.png'
import Liverpool from './images/Liverpool.png'
import Manchester_City from './images/Manchester_City.png'
import Everton from './images/Everton.png'
import West_Bromwich_Albion from './images/West_Bromwich_Albion.png'
import Newcastle_United from './images/Newcastle_United.png'
import Chelsea from './images/Chelsea.png'
import Manchester_United from './images/Manchester_United.png'
import Norwich_City from './images/Norwich_City.png'
import Stoke_City from './images/Stoke_City.png'
import Bournemouth from './images/Bournemouth.png'
import Arsenal from './images/Arsenal.png'
import Leicester_City from './images/Leicester_City.png'

const ScorePredictor = () => {
  const [optionValue, setOptionValue] = useState("");
  const [teams, setTeams] = useState("");

  const handleSelect = (e) => {
    console.log(e.target.value);
    const selectedTeam=teams.find((teams)=>{ return teams.name===e.target.value })
    console.log(selectedTeam,'selectedTeam');
    setselectdImg1(selectedTeam.img)
    setOptionValue(e.target.value);
  };
  useEffect(() => {
  setTeams([
  {id:'West Ham United',
    name:'West Ham United',
    img: West_Ham_United
  },
  {
    id:'Aston Villa',
    name:'Aston Villa',
    img:Aston_Villa
  },
  {
    id:'Swansea City',
    name:'Swansea City',
    img:Swansea_City
  },
  {
    id:'Watford',
    name:'Watford',
    img:Watford
  },
  {
    id:'Sunderland',
    name:'Sunderland',
    img:Sunderland
  },
  {
    id:'Tottenham Hotspur',
    name:'Tottenham Hotspur',
    img:Tottenham_Hotspur
  },
  {
    id:'Southampton',
    name:'Southampton',
    img:Southampton
  },
  {
    id:'Crystal Palace',
    name:'Crystal Palace',
    img:Crystal_Palace
  },
  {
    id:'Liverpool',
    name:'Liverpool',
    img:Liverpool
  },
  {
    id:'Manchester City',
    name:'Manchester City',
    img:Manchester_City
  },
  {
    id:'Everton',
    name:'Everton',
    img:Everton
  },
  {
    id:'West Bromwich Albion',
    name:'West Bromwich Albion',
    img:West_Bromwich_Albion
  },
  {
    id:'Newcastle United',
    name:'Newcastle United',
    img:Newcastle_United
  },
  {
    id:'Chelsea',
    name:'Chelsea',
    img:Chelsea
  },
  {
    id:'Manchester United',
    name:'Manchester United',
    img: Manchester_United
  },
  {
    id:'Norwich City',
    name:'Norwich City',
    img: Norwich_City
  },
  {
    id:'Stoke City',
    name:'Stoke City',
    img:Stoke_City
  },
  {
    id:'Bournemouth',
    name:'Bournemouth',
    img:Bournemouth
  },
  {
    id:'Arsenal',
    name:'Arsenal',
    img:Arsenal
  },
  {
    id:'Leicester City',
    name:'Leicester City',
    img:Leicester_City
  },
]) }, []);
 

 
  const [optionValue1, setOptionValue1] = useState("");
  const handleSelect1 = (e) => {
    const selectedTeam=teams.find((teams)=>{ return teams.name===e.target.value })
    console.log(selectedTeam,'selectedTeam');
    setselectdImg2(selectedTeam.img)
    setOptionValue1(e.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [result, setResult] = useState("");
  const [selectdImg1, setselectdImg1] = useState('ran')
  const [selectdImg2, setselectdImg2] = useState('ran')


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
      }), 2000);
  };

  return (
    <div className="main">
      <h1 className="titleofpage">Which Teams Are You Insterested To Predict?</h1>
    <div className="group1">
    <img src={selectdImg1} />
        <Dropdown className="dropdowncss" formLabel="Choose Home Team" onChange={handleSelect}>
        <Option>Click to see options</Option>
     {teams &&teams.map((option, index) =>
       <Option key={index} value={option.name}  >
        {option.name}
       </Option>
      )}
        </Dropdown>
        <p>You selected {optionValue} </p>
      </div>

         <div className="group2">
      <img src={selectdImg2} />
        <Dropdown className="dropdowncss" formLabel="Choose Away Team" onChange={handleSelect1}>
          <Option>Click to see options</Option>
     {teams &&teams.map((option, index) =>
       <Option key={index} value={option.name}  >
        {option.name}
       </Option>
      )}
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
