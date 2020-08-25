require('dotenv').config();
const axios = require('axios');
const db = require('../models');
const schedule = require('node-schedule')

// const update = schedule.scheduleJob('00 * * * *', function(){


    // Makes API call to Covid Tracking Project and syncs Data table with mapped response
    db.sequelize.sync().then(() => {
        axios.get("https://api.covidtracking.com/v1/states/current.json")
            .then(response => {
                const covidData = response.data.map(state => ({
                    state: "US-"+state.state,
                    positive: state.positive,
                    recovered: state.recovered,
                    deaths: state.death 
                }))
                console.log(covidData);
                db.Data.destroy({ truncate: true}).then(() => db.Data.bulkCreate(covidData))
            })
            .catch(err => {
                console.log(err);
            })
    })
// })