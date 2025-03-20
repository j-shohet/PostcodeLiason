import "./App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "./SoundPound.png"

function LandingPage(){

  const navigate = useNavigate();

return (
    <div className="landingPage">
<div className="card">
     <img src={logoImage} alt="Logo" className="logo" />
            <h1>Please select how you wish to pay for your ticket</h1>
    <div className="optionsContainer">
        
        <div className="methodContainer">
            <Link to="/payroll" className="nav-button">
            Payroll
            </Link>
            <p className="payroll-explanation">If your employer already works with a SoundPound credit union, you may be able to pay for any Annual Bee Network Tickets directly from your paycheck. Search for your employer and see if this works for you.</p>
        </div>
        <div className="methodContainer">
            <Link to="postcode" className="nav-button">
            Direct
            </Link>

        <p className="direct-explanation">Everyone can pay for their Annual Bee Network Tickets directly through a local credit union. Simply search the postcode where you live or work and find your credit union today.</p>
        </div>
    </div>
</div>
</div>
)
}

export default LandingPage