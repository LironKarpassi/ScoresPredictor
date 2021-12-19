import React from "react";
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="AboutUsbackground">
            <div className= "TeamMembers">
                <div className="Liron">
                    <div className="Photo"></div>
                    <div className="AboutMember"><h2>Karpassi Liron</h2>
                    <li className="details">25 Years Old</li>
                    <li className="details">Favorite Football Group: Liverpool</li></div>
                </div>
                <div className="Ido">
                <div className="Photo"></div>
                    <div className="AboutMember"><h2>Itzhaki Ido</h2>
                    <li className="details">25 Years Old</li>
                    <li className="details">Favorite Football Group: Chelsea</li></div>
                </div>
                <div className="Michal">
                <div className="Photo">
                    <div className="footballlogoMichal"></div>
                </div>
                    <div className="AboutMember"><h2>Verchivkin Michal</h2>
                    <li className="details">25 Years Old</li>
                    <li className="details">Favorite Football Group: Manchester City</li></div>
                </div>
                <div className="Ran">
                <div className="Photo"></div>
                    <div className="AboutMember"><h2>Moshe Ran</h2>
                    <li className="details">25 Years Old</li>
                    <li className="details">Favorite Football Group: Tottenham</li></div>
                </div>
            </div>
            <div className="Motivation"></div>
        </div>
        )
};

export default AboutUs;
