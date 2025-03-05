import "./App.css";
import { useState } from "react";

function PayrollSearch(){


return (
<div className="payrollSearch">
<form className="enter-form">
            <h1>
              SAMPLE TEXT
            </h1>
            <input
              type="text"
              className="input"
              name="employer"
              onChange={handleEmployerChange}
              placeholder="Full Postcode"
            />
            <button type="submit" className="button" onClick={handleSubmit}>
              See Results
            </button>
          </form>
</div>
)
}

export default PayrollSearch