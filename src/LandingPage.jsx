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
            <p className="payroll-explanation">Depending on your employer you may be able to pay for the ticket through salary deduction. On the following page, you can see if your employer is eligible, and how to apply</p>
        </div>
        <div className="methodContainer">
            <Link to="postcode" className="nav-button">
            Direct
            </Link>

        <p className="direct-explanation">Join and pay a credit union directly for the ticket, which credit unions you apply through depends on your location!</p>
        </div>
    </div>
</div>
</div>
)
}

export default LandingPage