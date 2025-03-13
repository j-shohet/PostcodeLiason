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
        
        <div className="payrollContainer">
            <Link to="/payroll" className="nav-button">
            pay by payroll deduction
            </Link>
            <p className="payroll-explanation"></p>
        </div>
        <div className="directContainer">
            <Link to="postcode" className="nav-button">
            pay a credit union directly
            </Link>

        <p className="direct-explanation"></p>
        </div>
    </div>
</div>
</div>
)
}

export default LandingPage