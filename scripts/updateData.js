const db = require("../models");
const passport = require("../config/passport");

function mapResponse(response) {
    let covidData = response.map(state => ({
        state: state.state,
        positive: state.positive,
        recovered: state.recovered,
        deaths: state.death 
    }))
    return covidData;
}

db.sequelize.sync({}).then(() => {
    axios.get("https://api.covidtracking.com/v1/states/current.json")
     .then(response => {
        mapResponse(response); 
        db.Data.insert({
            covidData
        })
     })
})