import React from 'react';
import API from '../../utils/API'
import { render } from "react-dom";
import { Chart } from "react-google-charts";

const data = [
    ['State', 'COVID-19 Cases'],
    ['US-AL', 200],
    ['US-AZ', 200],
    ['US-AK', 300],
    ['US-AR', 400],
    ['US-CA', 400],
    ['US-CO', 500],
    ['US-CT', 600],
    ['US-DE', 700],
    ['US-FL', 400],
    ['US-GA', 400],
    ['US-HI', 400],
    ['US-ID', 400],
    ['US-IL', 400],
    ['US-IN', 400],
    ['US-IA', 400],
    ['US-KS', 400],
    ['US-KY', 400],
    ['US-LA', 400],
    ['US-ME', 400],
    ['US-MD', 400],
    ['US-MA', 400],
    ['US-MI', 400],
    ['US-MN', 400],
    ['US-MS', 400],
    ['US-MO', 400],
    ['US-MT', 400],
    ['US-NE', 400],
    ['US-NV', 400],
    ['US-NH', 400],
    ['US-NJ', 400],
    ['US-NM', 400],
    ['US-NY', 428558],
    ['US-NC', 400],
    ['US-ND', 400],
    ['US-OH', 400],
    ['US-OK', 400],
    ['US-OR', 400],
    ['US-PA', 400],
    ['US-RI', 400],
    ['US-SC', 400],
    ['US-SD', 400],
    ['US-TN', 400],
    ['US-TX', 400],
    ['US-UT', 400],
    ['US-VT', 400],
    ['US-VA', 400],
    ['US-WA', 400],
    ['US-WV', 400],
    ['US-WI', 400],
    ['US-WY', 400]
];

class Map extends React.Component {
    render() {
        return (
            <Chart
                chartType="GeoChart"
                width="100%"
                height="400px"
                data={data}
                options = {{
                    region: 'US',
                    resolution: 'provinces',
                    colorAxis: {
                      colors: ['white','#005eaa']
                    } 
                }}
                mapsApiKey=""
                rootProps={{ 'data-testid': '1' }}
            />
        )
    }
}

export default Map;