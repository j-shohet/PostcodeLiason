import "./App.css";
import { useState, useEffect } from "react";
import logoImage from "./SoundPound.png";
import employerLookupFile from "./employerLookup.json";
import CashboxLogo from "./assets/logos/CashboxLogo.png";
import HootLogo from "./assets/logos/HootLogo.png";
import ManchesterLogo from "./assets/logos/ManchesterLogo.png";
import OldhamLogo from "./assets/logos/OldhamLogo.png";
import SalfordLogo from "./assets/logos/SalfordLogo.png";
import SouthManchesterLogo from "./assets/logos/SouthManchesterLogo.png";
import StockportLogo from "./assets/logos/StockportLogo.png";
import UnifyLogo from "./assets/logos/UnifyLogo.png";


function PayrollSearch() {

  const [payrollPartners, setPayrollPartners] = useState([])
  const handleEmployerChange = () => {};

  const handleSubmit = () => {};



const converterFunc = (obj) => {
  const newEmployers = Object.keys(obj).map((employer) => ({
    name: employer,
    creditUnions: obj[employer],
  }));

  setPayrollPartners((prevState) => [...prevState, ...newEmployers]);
};

  const creditUnionDataTable = {
      Stockport: {
        name: "Stockport Credit Union",
        img_url: StockportLogo,
        ApplyLink: "https://www.stockportcu.com/what-we-do/annual-bee-bus-ticket/?",
      },
      Manchester: {
        name: "Manchester Credit Union",
        img_url: ManchesterLogo,
        ApplyLink: "https://manchestercreditunion.co.uk/products/loans/bee-network-annual-bus-ticket",
      },
      Unify: {
        name: "Unify Credit Union",
        img_url: UnifyLogo,
        ApplyLink: "https://unifycu.org/Annual_Bee_Bus_Ticket",
      },
      Oldham: {
        name: "Oldham Credit Union",
        img_url: OldhamLogo,
        ApplyLink: "https://www.oldhamcreditunion.co.uk/join/",
      },
      "South Manchester": {
        name: "South Manchester Credit Union",
        img_url: SouthManchesterLogo,
        ApplyLink: "https://www.smcreditunion.co.uk/annual-bee-bus-ticket/",
      },
      Hoot: {
        name: "Hoot Credit Union",
        img_url: HootLogo,
        ApplyLink: "https://wisewithmoney.org.uk/loans/bee-bus-pass-loan/",
      },
      CashBox: {
        name: "Cash Box Credit Union",
        img_url: CashboxLogo,
        ApplyLink: "https://www.cashbox.org.uk/loans/bee-bus-annual-pass-loan",
      },
      Salford: {
        name: "Salford Credit Union",
        img_url: SalfordLogo,
        ApplyLink:
          "https://www.salfordcreditunion.com/annual-bee-bus-ticket-loan/",
      },
    };

    useEffect(() => {
      converterFunc(employerLookupFile)
      console.log(payrollPartners)
    },[])


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
