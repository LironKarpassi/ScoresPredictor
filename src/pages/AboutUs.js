import React from "react";
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="AboutUsbackground">
            <div className= "TeamMembers">
                <div className="Liron">
                    <div className="Photo"></div>
                    <div className="AboutMember"><h2>Karpassi Liron</h2></div>
                </div>
                <div className="Ido">
                <div className="Photo"></div>
                    <div className="AboutMember"><h2>Itzhaki Ido</h2></div>
                </div>
                <div className="Michal">
                <div className="Photo"></div>
                    <div className="AboutMember"><h2>Verchivkin Michal</h2></div>
                </div>
                <div className="Ran">
                <div className="Photo"></div>
                    <div className="AboutMember"><h2>Moshe Ran</h2></div>
                </div>
            </div>
        </div>
        )
};

export default AboutUs;
