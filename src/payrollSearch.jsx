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
import Select from "react-select";
import {Link,  Navigate,  useNavigate} from "react-router-dom"

function PayrollSearch() {
  const [payrollPartners, setPayrollPartners] = useState([]);
  const [selectedEmployer, setSelectedEmployer] = useState("");
  const [result, setResult] = useState("");
  const [searchDone, setSearchDone] = useState(false);
 const navigate = useNavigate();


  const handleEmployerChange = (e) => {
    setSelectedEmployer({ name: e.label, creditUnions: e.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(() => {
      return selectedEmployer;
    });
    setSearchDone(true);
  };


  const handleEmployerReset = () => {
    setResult("")
    setSearchDone(false)
    setSelectedEmployer("")
  }

  const converterFunc = (obj) => {
    const newEmployers = Object.keys(obj).map((employer) => ({
      value: obj[employer],
      label: employer,
    }));

    setPayrollPartners((prevState) => newEmployers);
  };

  const creditUnionDataTable = {
    Stockport: {
      name: "Stockport Credit Union",
      img_url: StockportLogo,
      ApplyLink:
        "https://www.stockportcu.com/what-we-do/annual-bee-bus-ticket/?",
    },
    Manchester: {
      name: "Manchester Credit Union",
      img_url: ManchesterLogo,
      ApplyLink:
        "https://manchestercreditunion.co.uk/products/loans/bee-network-annual-bus-ticket",
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
    converterFunc(employerLookupFile);
  }, []);

  return (
    <div className="payrollSearch">
      <div className="card">
        <img src={logoImage} alt="Logo" className="logo" />
        <h1>Select your employer</h1>
        {searchDone ? (
          <div className="payroll-results">
            <h2>
              You can apply for deductions from your salary from the below
              credit unions...
            </h2>
            {result.creditUnions.map((creditunion) => {
              return (
                <div className="result" key={creditunion}>
                  <div className="logo-name-container">
                    <p className="result-text">
                      {creditUnionDataTable[creditunion].name}
                    </p>
                    <img
                      src={creditUnionDataTable[creditunion].img_url}
                      className="result-logo"
                    />
                  </div>

                  <button className="apply-button">
                    <a
                      href={creditUnionDataTable[creditunion].ApplyLink}
                      target="_blank"
                    >
                      Visit Site
                    </a>
                  </button>
                </div>
              );
            })}
            <div className="nav-button-container">
              <button className="nav-button" onClick={handleEmployerReset}>
                Select different employer
              </button>
              <Link to="/">
                <button className="nav-button">
                  Start again
                </button>
            </Link>
            </div>
          </div>
        ) : (
          <form className="enter-form">
            <Select
              options={payrollPartners}
              className="input"
              onChange={handleEmployerChange}
            />
            <button
              type="submit"
              className="apply-button"
              onClick={handleSubmit}
            >
              See Results
            </button>
          </form>
        )}

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
