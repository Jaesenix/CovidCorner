import React, { Component } from "react";
// import API from "../../utils/API";
// import { render } from "react-dom";

class TestCtr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
        };
    }

    //   Get current location
    getLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHughAccuracy: true, timeout: 20000 },
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.getLocation()} title="Get Location" />
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
            </div>
        );
    }
}