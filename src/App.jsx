import './App.css';
import { useState } from 'react';
import postcodeLookupFile from './postcode_lookup.json';
import { parse, match, toNormalised } from 'postcode';
import logoImage from './SoundPound.png';

function App() {
  const [enteredPostcode, setEnteredPostcode] = useState(''); 
  const [result, setResult] = useState('');
  const [searchDone, setSearchDone] = useState(false)

  const postcodeLookup = postcodeLookupFile


  const handlePostcodeChange = (e) => {
    setEnteredPostcode(e.target.value);
  };

const creditUnionDataTable = {
  "Stockport": {"name": "Stockport Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "www.google.com"},
  "Manchester": {"name": "Manchester Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "www.google.com"},
  "Unify": {"name": "Unify Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "www.google.com"},
  "Oldham":  {"name": "Oldham Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "www.google.com"},
  "South Manchester": {"name": "South Manchester Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "www.google.com"},
  "Hoot": {"name": "Hoot Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "www.google.com"},
  "Cash Box": {"name": "Cash Box Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "www.google.com"},
  "Salford": {"name": "Salford Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "www.google.com"},
}



function extractPostcode(input) {
 
  const parsedInput = parse(input)
  return parsedInput.district
}



const handleSubmit = (e) => {
  e.preventDefault();
  const companyName = postcodeLookup[extractPostcode(enteredPostcode)];
  if (companyName) {
    setResult(companyName);
    setSearchDone(true)
  } else {
    setResult('No credit union found');
  }
}
return (
  <div className="App">
    <div className="card">
    <img src={logoImage} alt="Logo" className="logo" />
    {searchDone ? <><h2>Your postcode matches with:</h2>
      {result && (
        <div className="result">
          <p className="result-text">{creditUnionDataTable[result].name}</p>
          <button className="apply-button"><a href={creditUnionDataTable[result].ApplyLink}>
                Apply now
            </a></button>
        </div>
      )} </>: <><h1>Enter the postcode of where you live or work in Greater Manchester to find your local credit union options</h1>
          <input
            type="text"
            className="input"
            name="postcode"
            onChange={handlePostcodeChange}
            placeholder='Full Postcode'
          />
      <button type="submit" className="button" onClick={handleSubmit}>
          Search
        </button>
        </>
     }
     <h3>Please note that based on location there may be more than one credit union you are eligible to join. You can only access the Adult Annual Bee Bus Ticket Loan through one credit union, but may have a choice over which credit union you use. </h3>
      
      
    </div>
  </div>
);
}

export default App;
