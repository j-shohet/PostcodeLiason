import './App.css';
import { useState } from 'react';
import postcodeLookupFile from './postcode_lookup.json';
import { parse, match, toNormalised } from 'postcode';
import logoImage from './SoundPound.png';

function App() {
  const [enteredPostcode, setEnteredPostcode] = useState(''); 
  const [result, setResult] = useState('');
  const [searchDone, setSearchDone] = useState(false)
  const [error, setError] = useState(false)

  const postcodeLookup = postcodeLookupFile


  const handlePostcodeChange = (e) => {
    setEnteredPostcode(e.target.value);
  };

const creditUnionDataTable = {
  "Stockport": {"name": "Stockport Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "https://www.stockportcu.com/join-today/"},
  "Manchester": {"name": "Manchester Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "https://manchester.cuaccount.com/join/"},
  "Unify": {"name": "Unify Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "https://www.cusecureserver2.co.uk/~unifydigital/members/app_step_intro_mem.php"},
  "Oldham":  {"name": "Oldham Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "https://www.oldhamcreditunion.co.uk/join/"},
  "South Manchester": {"name": "South Manchester Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "https://www.smcreditunion.co.uk/join/?_gl=1*pppi5q*_ga*MTkzMTE2NzA2NC4xNzIwNzA2MjQy*_ga_8Z1SHBFSMZ*MTczMjg3ODE0NC4yMy4xLjE3MzI4NzgxNTcuNDcuMC4w"},
  "Hoot": {"name": "Hoot Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "https://wisewithmoney.org.uk/loans/bee-bus-pass-loan/"},
  "Cash Box": {"name": "Cash Box Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "https://www.cashbox.org.uk/join-us"},
  "Salford": {"name": "Salford Credit Union", "img_url": "www.google.com/maps", "ApplyLink": "https://www.salfordcreditunion.com/how-to-join-salford-credit-union/"},
}



function extractPostcode(input) {
 
  const parsedInput = parse(input)
  return parsedInput.district
}


const handleBackButton = (e) => {
  e.preventDefault()
  setResult('')
  setSearchDone(false)
  setError(false)
}



const handleSubmit = (e) => {
  e.preventDefault();
  console.log(postcodeLookup[extractPostcode(enteredPostcode)])
  if(enteredPostcode === ""){

  } else {
    const companyName = postcodeLookup[extractPostcode(enteredPostcode)];
  if (companyName) {
    setResult(companyName);
    setSearchDone(true)
  } else {
    setSearchDone(true)
    setError(true)
  }
  }
  
}
return (
  <div className="App">
    <div className="card">
    <img src={logoImage} alt="Logo" className="logo" />
    {}
    {searchDone  ? <>
      {error && (
        <>
        <button className='apply-button' onClick={handleBackButton}>Go back</button>
        <h1 className='error-title'>Unforutnatley you reside outside of our eligible area.</h1>
        <h2 className='error-explanation'>If you are interested in joining a credit union without the bus pass, please go to the link below to find one you are eligible for</h2>
        <button className='apply-button'><a href="https://www.findyourcreditunion.co.uk" target='_blank'>Find your credit union</a></button>
        </>
      )}
      {result && (
        <>
        <button className='apply-button' onClick={handleBackButton}>Go back</button>
        <h2>Your postcode matches with:</h2>
        {result.map((creditunion) => {
          return (
            <div className="result" key={creditunion}>
          <p className="result-text">{creditUnionDataTable[creditunion].name}</p>
          <button className="apply-button"><a href={creditUnionDataTable[creditunion].ApplyLink} target='_blank'>
                Visit Site
            </a></button>
        </div>
          )
        })}
        
        </>
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
