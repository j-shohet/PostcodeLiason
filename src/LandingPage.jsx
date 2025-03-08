import "./App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LandingPage(){

  const navigate = useNavigate();

return (
<div className="landingPage">
    <div className="optionsContainer">
        <div className="payrollContainer">
            <Link to="/payroll">
            <buton className="payroll-landing-button">Pay by Payroll</buton>
            </Link>
            <p className="payroll-explanation"></p>
        </div>
        <div className="directContainer">
            <Link to="postcode">
        <buton className="direct-landing-button">Pay a credit union directly</buton>
            </Link>

        <p className="direct-explanation"></p>
        </div>
    </div>
</div>
)
}

export default LandingPage