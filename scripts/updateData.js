require('dotenv').config();
const axios = require('axios');
const db = require('../models');

// Makes API call to Covid Tracking Project and syncs Data table with mapped response
db.sequelize.sync({ force: true }).then(() => {
    axios.get("https://api.covidtracking.com/v1/states/current.json")
        .then(response => {
            const covidData = response.data.map(state => ({
                state: "US-"+state.state,
                positive: state.positive,
                recovered: state.recovered,
                deaths: state.death 
            }))
            console.log(covidData);
            db.Data.bulkCreate(covidData)
        })
        .catch(err => {
            console.log(err);
        })
})