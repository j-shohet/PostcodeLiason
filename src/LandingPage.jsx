import "./App.css";
import { useState } from "react";

function LandingPage(){


return (
<div className="landingPage">
    <div className="optionsContainer">
        <div className="payrollContainer">
            <buton className="payroll-landing-button">Pay by Payroll</buton>
            <p className="payroll-explanation"></p>
        </div>
        <div className="directContainer">
        <buton className="direct-landing-button">Pay a credit union directly</buton>
        <p className="direct-explanation"></p>
        </div>
    </div>
</div>
)
}

export default LandingPage