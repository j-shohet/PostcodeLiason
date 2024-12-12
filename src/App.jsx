import "./App.css";
import { useState } from "react";
import postcodeLookupFile from "./postcode_lookup.json";
import { parse, match, toNormalised } from "postcode";
import logoImage from "./SoundPound.png";
import CashboxLogo from "./assets/logos/CashboxLogo.png";
import HootLogo from "./assets/logos/HootLogo.png";
import ManchesterLogo from "./assets/logos/ManchesterLogo.png";
import OldhamLogo from "./assets/logos/OldhamLogo.png";
import SalfordLogo from "./assets/logos/SalfordLogo.png";
import SouthManchesterLogo from "./assets/logos/SouthManchesterLogo.png";
import StockportLogo from "./assets/logos/StockportLogo.png";
import UnifyLogo from "./assets/logos/UnifyLogo.png";

function App() {
  const [enteredPostcode, setEnteredPostcode] = useState("");
  const [result, setResult] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [error, setError] = useState(false);

  const postcodeLookup = postcodeLookupFile;

  const handlePostcodeChange = (e) => {
    setEnteredPostcode(e.target.value);
  };

  const creditUnionDataTable = {
    Stockport: {
      name: "Stockport Credit Union",
      img_url: StockportLogo,
      ApplyLink: "https://www.stockportcu.com/join-today/",
    },
    Manchester: {
      name: "Manchester Credit Union",
      img_url: ManchesterLogo,
      ApplyLink: "https://manchester.cuaccount.com/join/",
    },
    Unify: {
      name: "Unify Credit Union",
      img_url: UnifyLogo,
      ApplyLink:
        "https://unifycu.org/Annual_Bee_Bus_Ticket",
    },
    Oldham: {
      name: "Oldham Credit Union",
      img_url: OldhamLogo,
      ApplyLink: "https://www.oldhamcreditunion.co.uk/join/",
    },
    "South Manchester": {
      name: "South Manchester Credit Union",
      img_url: SouthManchesterLogo,
      ApplyLink:
        "https://www.smcreditunion.co.uk/annual-bee-bus-ticket/",
    },
    Hoot: {
      name: "Hoot Credit Union",
      img_url: HootLogo,
      ApplyLink: "https://wisewithmoney.org.uk/loans/bee-bus-pass-loan/",
    },
    "Cash Box": {
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

  function extractPostcode(input) {
    const parsedInput = parse(input);
    return parsedInput.district;
  }

  const handleBackButton = (e) => {
    e.preventDefault();
    setResult("");
    setSearchDone(false);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postcodeLookup[extractPostcode(enteredPostcode)]);
    if (enteredPostcode === "") {
    } else {
      const companyName = postcodeLookup[extractPostcode(enteredPostcode)];
      if (companyName) {
        setResult(companyName);
        setSearchDone(true);
      } else {
        setSearchDone(true);
        setError(true);
      }
    }
  };
  return (
    <div className="App">
      <div className="card">
        <img src={logoImage} alt="Logo" className="logo" />
        {}
        {searchDone ? (
          <>
            {error && (
              <>
                <button className="apply-button" onClick={handleBackButton}>
                  Go back
                </button>
                <h1 className="error-title">
                  Unforutnatley you reside outside of our eligible area.
                </h1>
                <h2 className="error-explanation">
                  If you would still like to join a credit union to access its range of services, please visit the website below.
                </h2>
                <button className="apply-button">
                  <a
                    href="https://www.findyourcreditunion.co.uk"
                    target="_blank"
                  >
                    Find your credit union
                  </a>
                </button>
              </>
            )}
            {result && (
              <>
                <button className="apply-button" onClick={handleBackButton}>
                  Go back
                </button>
                <h2>Your postcode matches with:</h2>
                {result
                  .sort()
                  .map((creditunion) => {
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
              </>
            )}{" "}
          </>
        ) : (
          
          <form className="enter-form">
            <h1>
              Enter the postcode of where you live or work in Greater Manchester
              to find your local credit union options
            </h1>
            <input
              type="text"
              className="input"
              name="postcode"
              onChange={handlePostcodeChange}
              placeholder="Full Postcode"
            />
            <button type="submit" className="button" onClick={handleSubmit}>
              Search
            </button>
            </form>
          
        )}

        <h3>
          Please note that based on location there may be more than one credit
          union you are eligible to join. You can only access the Adult Annual
          Bee Bus Ticket Loan through one credit union, but may have a choice
          over which credit union you use.{" "}
        </h3>
        <p className="email-text">If you have any issues finding your credit union please email:</p><p className="email"><a href="mailto:hello@soundpoundgroup.co.uk">hello@soundpoundgroup.co.uk</a></p>
      </div>
    </div>
  );
}

export default App;
