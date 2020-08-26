import React from "react";
import API from "../../utils/API"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ServerStyleSheets } from "@material-ui/core";

const styles = {
    statCards: {
      marginBottom: '10px',
      alignItems: 'center',
      backgroundColor: '#3B6F91',
      textAlign: 'center',
      fontFamily: 'Nunito, sans-serif',
    }
  }; 

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
                <Card  style={styles.statCards}>
                  <CardContent>
                     <h4 style={{color: '#F5F5F5'}}>Total Cases</h4>
                  <h5 style={{color: '#F5F5F5'}}>{this.state.total}</h5>
                  <hr></hr>
            
                     <h4 style={{color: '#F5F5F5'}}>Total Recovered</h4>
                  <h5 style={{color: '#F5F5F5'}}>{this.state.recovered}</h5>
            <hr></hr>
                     <h4 style={{color: '#F5F5F5'}}>Total Deaths</h4>
                  <h5 style={{color: '#F5F5F5'}}>{this.state.deaths}</h5>
<p> </p>
                  </CardContent>
                </Card>
     
                </section>
        );
    }
}

export default Stats;