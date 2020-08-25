import React from "react";
import API from "../../utils/API"
import { Chart } from "react-google-charts";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, data: null, keys: [["State", "Positive Cases"]] };
    }

    componentDidMount() {
        this.addData();
    }

    addData = () => {
        API.getData().then(res => {
            const values = res.data.map(stateData => ([
                stateData.state,
                stateData.positive
            ]))
            const joined = this.state.keys.concat(values);
            this.setState({ loading: false, data: joined })
            console.log(this.state.data);
        })    
    }; 

    render() {
        const {loading, data} = this.state;

        return loading ? "Classic loading placeholder" : (
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