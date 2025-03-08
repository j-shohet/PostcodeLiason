import "./App.css";
import { useState } from "react";
import logoImage from "./SoundPound.png";

function PayrollSearch() {
  const handleEmployerChange = () => {};

  const handleSubmit = () => {};

  const payrollPartners = [
    { name: "Payroll1", id: 1 },
    { name: "Payroll2", id: 2 },
  ];

  return (
    <div className="payrollSearch">
      <div className="card">
        <img src={logoImage} alt="Logo" className="logo" />
        <form className="enter-form">
          <h1>SAMPLE TEXT</h1>
          <select
            className="input"
            name="employer"
            onChange={handleEmployerChange}
            placeholder="Full Postcode"
          >
            {payrollPartners.map((partner) => <option>{partner.name}</option>)}
          </select>
          <button type="submit" className="apply-button" onClick={handleSubmit}>
            See Results
          </button>
        </form>
        <h3>
          Please note that based on your employer there may be more than one
          credit union you are eligible to join. You can only access the Adult
          Annual Bee Bus Ticket Loan through one credit union, but may have a
          choice over which credit union you use.{" "}
        </h3>
        <p className="email-text">
          If you have any issues finding your credit union please email:
        </p>
        <p className="email">
          <a href="mailto:hello@soundpoundgroup.co.uk">
            hello@soundpoundgroup.co.uk
          </a>
        </p>
      </div>
    </div>
  );
}

export default PayrollSearch;
