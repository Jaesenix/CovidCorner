import React from "react";
import API from "../../utils/API"

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {total: ""}
    }

    componentDidMount() {
        this.addTotal();
    }

    addTotal = () => {
        API.getData().then(res => {
            const positiveArray = res.data.map(statePositive => (
                statePositive.positive
            ))
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const totalPostive = positiveArray.reduce(reducer);
            this.setState({total: totalPostive});
            console.log(totalPostive);
        })
    }

    render() {
        return (
            <section>
                <div>
                    <h1>Cases and Deaths in the US</h1>
                    <div>
                        <h4>Total Cases</h4>
                        <h3>{total}</h3>
                    </div>
                </div>
            </section>
        )
    }
}

export default Stats;