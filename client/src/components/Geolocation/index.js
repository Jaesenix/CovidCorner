import React, { Component } from "react";
import { render } from "react-dom";

class TestCtr extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

//   Get current location
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}

// render(<TestCtr />, document.getElementById("root"));