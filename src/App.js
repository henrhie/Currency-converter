import React, {useEffect, useState} from 'react';
import Dropdown from "./components/Dropdown.js";
import Textbox from "./components/Textbox";
import CountryListAPI from "./api/countryListAPI";
import RateFetchAPI from "./api/RateFetchAPI";
import './App.css';


function App() {
  const [countryList, setCountryList] = useState([]);
  const [leftSelectedCountry, setLeftSelectedCountry] = useState('');
  const [rightSelectedCountry, setRightSelectedCountry] = useState('');

  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const [debouncedValue, setDebouncedValue] = useState('');

  const [rate, setRate] = useState('');

  const retrieveList = async () => {
    const response = await CountryListAPI.get("currencies");
    setCountryList(Object.values(response.data.results))
    setLeftSelectedCountry(Object.values(response.data.results)[0].id)
    setRightSelectedCountry(Object.values(response.data.results)[0].id)
  }

  useEffect(() => {
    retrieveList();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500)
    return () => {
      clearTimeout(timeoutId);
    }
  }, [inputValue])

  

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await RateFetchAPI.get("/convert",{
        params : {
          q : `${leftSelectedCountry}_${rightSelectedCountry}`
        }
      })
      const rateValue = response.data[`${leftSelectedCountry}_${rightSelectedCountry}`]
      setRate(rateValue);
    }
    if(debouncedValue){
      fetchResponse();
    }
    
  }, [debouncedValue, leftSelectedCountry, rightSelectedCountry])

  useEffect(() => {
    setOutputValue(rate);
  }, [rate])


  return (
    <div>
      <div style={{paddingTop:"25px", position:"absolute", top:"0", right:"300px"}}>
        <div className="ui menu secondary" style={{marginLeft:"65%"}}>
          <div className="item">
            <button className="ui button" href="https://github.com/henrhie">
              <a href="https://github.com/henrhie">Github</a>
            </button>
          </div>
          <div className="item">
            <button className="ui button" href="https://twitter.com">
              <a href="https://twitter.com">Twitter</a>
            </button>
          </div>
          <div className="item">
            <button className="ui button" href="https://facebook.com">
            <a href="https://facebook.com">Facebook</a>
            </button>
          </div>
          
        </div>
      </div>
      
      <div className="top-box">
        <div className="items-box">
          <div className="container center" style={{padding:"100px"}}>
            <div className="grid-element">
              <div className="col">
                <div style={{marginTop:"11px"}}>
                  <Textbox value={inputValue} setValue={setInputValue} autofocus={true} label={"Convert from"}/>
                </div>
              </div>
              <div className="col">
                <div style={{marginTop:"5px"}}>
                  <Dropdown countryList={countryList} selectedCountry={leftSelectedCountry} setSelectedCountry={setLeftSelectedCountry}/>
                </div>
              </div>
              <div className="col">
                <img src="https://img.icons8.com/cotton/64/000000/circled-right--v1.png" alt="arrow"/>
              </div>
              <div className="col d-down">
                <div style={{marginTop:"5px"}}>
                  <Dropdown countryList={countryList} selectedCountry={rightSelectedCountry} setSelectedCountry={setRightSelectedCountry}/>
                </div>
              </div>
              <div className="col">
                <div style={{marginTop:"11px"}}>
                  <Textbox value={outputValue*inputValue} setValue={setOutputValue} label={"Convert to"}/>
                </div>
              </div>
            </div>
            <div style={{padding:"15px", marginTop:"15px"}}>
              <h3 className="ui header">Rate: {rate}</h3>
            </div>
          </div>
        </div>
    </div>
    </div>
    
  );
}

export default App;
