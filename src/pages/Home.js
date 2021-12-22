import React, { useState } from 'react';
import './HomePage.css';
import Popup from './PopUp';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(false);
 

return (
<div className="Homebackground">
    <div className="info"><h1>Welcome To Our </h1></div>
    <div className="info2"><h1>Scores Predictor </h1> <br/> </div>
    <div class="btn-1">
    <a href="/page-login"><span>Lets Get Started!</span></a>
  </div>
  <div class="btn-2">
     <a ><span onClick={() => setIsOpen(true)}>How Does It Works?</span></a>
     {isOpen === true && (
        <Popup
          content={
            <h1>hello</h1>           
          }
          handleClose={togglePopup}
        />
      )}
  </div>
       
</div>
)
};

export default Home;
