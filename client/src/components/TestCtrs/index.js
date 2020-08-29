import React, { Component } from "react";

class TestCtrs extends Component {
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html";
        }}
      >Click here to find a testing location near you</button>
    )
  }
}


export default TestCtrs;