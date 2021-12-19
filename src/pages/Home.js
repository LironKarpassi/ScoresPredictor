import React from "react";
import './HomePage.css';

const Home = () => {
return (
<div className="Homebackground">
    <div className="info"><h1>Welcome To Our Score Predictor</h1> <br/>
    <p className="titleofdesc">How Does It Works?</p><br/>
    <p className="desc">1. Log In Or Sign Up</p><br/>
    <p className="desc">2. Choose Home Team</p><br/>
    <p className="desc">3. Choose Away Team</p><br/>
    <p className="desc">4. Press The Prediction Button</p><br/>
    <p className="desc">5. Reveal The Chances That The Home Team Is Going To Win</p><br/>
    <p className="desc">GOOD LUCK</p><br/>
    </div>
    <div className="AboutTheAlgo">
    <p className="titleofdesc">About The Algorithm</p><br/>
    </div>
</div>
)
};

export default Home;
