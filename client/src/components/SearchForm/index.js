import React from "react";
import "./style.css";
import { Redirect } from "react-router-dom";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
    <div className="form-group center-search">
      {/* <label htmlFor="state">State:</label> */}
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="state"
        list="States"
        type="text"
        className="form-control state-search-form"
        placeholder="Select a state to begin"
        id="state" 
        style={{width: '300px'}}
        />
            <button type="submit" onClick={props.handleFormSubmit} className="btn welcome-btn">
        Search
      </button>
      <datalist id="States">
        {props.States.map(state => (
          <option value={state} key={state} />
        ))}
      </datalist>
     
    </div>
  </form>
);
}
   
export default SearchForm;