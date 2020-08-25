import React from "react";
import API from "../../utils/API"

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {total: null, deaths: null, recovered: null}
    }

    componentDidMount() {
        this.addTotal();
        this.addDeaths();
        this.addRecovered();
    }

    addTotal = () => {
        API.getData().then(res => {
            const positiveArray = res.data.map(statePositive => (
                statePositive.positive
            ))
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const totalPostive = positiveArray.reduce(reducer);
            function formatNumber(num) {
                return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
            this.setState({total: formatNumber(totalPostive)});
        })
    }

    addDeaths = () => {
        API.getData().then(res => {
            const deathsArray = res.data.map(stateDeaths => (
                stateDeaths.deaths
            ))
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const totalDeaths = deathsArray.reduce(reducer);
            function formatNumber(num) {
                return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
            this.setState({deaths: formatNumber(totalDeaths)})
        })
    }

    addRecovered = () => {
        API.getData().then(res => {
            const recoveredArray = res.data.map(stateRecovered => (
                stateRecovered.recovered
            ))
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const totalRecovered = recoveredArray.reduce(reducer);
            function formatNumber(num) {
                return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
            this.setState({recovered: formatNumber(totalRecovered)})
        })
    }

    render() {

        return (
            <section>
                <div>
                    <h1>US Statistics</h1>
                    <div>
                        <h4>Total Cases</h4>
                        <h3>{this.state.total}</h3>
                    </div>
                    <div>
                        <h4>Total Recovered</h4>
                        <h3>{this.state.recovered}</h3>
                    </div>
                    <div>
                        <h4>Total Deaths</h4>
                        <h3>{this.state.deaths}</h3>
                    </div>
                </div>
            </section>
        ) 
    }
}

export default Stats;