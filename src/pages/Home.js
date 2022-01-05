import React, { useState } from 'react';
import './HomePage.css';
const Home = () => {
return (
<div className="Homebackground">
    <div className="info"><h1>Welcome To Our </h1></div>
    <div className="info2"><h1>Scores Predictor </h1> <br/> </div>
    <div class="btn-1">
    <a href="/page-login"><span>Lets Get Started!</span></a>
  </div>
  <div class="btn-2">
     <a href="/information-page"><span>How Does It Works?</span></a>
  </div>
       
</div>
)
};

export default Home;
