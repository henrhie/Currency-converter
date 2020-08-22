import React from "react";
import "./Dropdown.css";

export default ({countryList, selectedCountry, setSelectedCountry}) => {

  const onItemClick = (event) => {
    setSelectedCountry(event.target.value)
  }

  const renderedList = countryList.map((element) => {
    return (
      <button className="dropdown-item" key={element.id} type="button" value={element.id} onClick={onItemClick}>{element.id}</button>
    )
  })


  return (
    <div className="btn">
      <button className="btn btn-outline-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
        {selectedCountry}
      </button>
      <div className="dropdown-menu">
        {renderedList}
      </div>
    </div>
  )
};
