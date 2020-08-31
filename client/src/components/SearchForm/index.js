import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="state"
          list="States"
          type="text"
          className="form-control"
          placeholder="Type in a state to begin"
          id="state"
        />
        <datalist id="States">
          {props.States.map(state => (
            <option value={state} key={state} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;