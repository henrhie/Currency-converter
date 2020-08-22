import React from "react";
import "./Dropdown.css";

export default ({countryList, selectedCountry, setSelectedCountry}) => {

  const onItemClick = (event) => {
    setSelectedCountry(event.target.value)
  }

  const renderedList = countryList.map((element) => {
    return (
      <button class="dropdown-item" type="button" value={element.id} onClick={onItemClick}>{element.id}</button>
    )
  })


  return (
    <div class="btn">
      <button class="btn btn-outline-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
        {selectedCountry}
      </button>
      <div class="dropdown-menu">
        {renderedList}
      </div>
    </div>
  )
};
