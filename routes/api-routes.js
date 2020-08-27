// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const axios = require("axios");

module.exports = function(app) {
  // Route for getting location for nearest covid testing centers
  app.get("/api/geolocation", function(req, res) {
    return axios.get("https://www.googleapis.com/geolocation/v1/geolocate?key=" + process.env.GEOLOCATION_API_KEY + "&callback=initMap").then(response => {
      res.json(response.data);
      console.log(response.data);
    })
  });

  // Route for getting Covid19-related articles
  app.get("/api/articles", function(req, res) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid" + "&api-key=" + process.env.NYT_API_KEY).then(response => {
      res.json(response.data);
    })
  })

  // Route for logging in
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      mask: req.body.mask,
      unemployed: req.body.unemployed,
      household: req.body.household
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.status(401).json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        mask: req.user.mask,
        unemployed: req.user.unemployed,
        household: req.user.household
      });
    }
  });

  // Route for getting data from the Data table
  app.get("/api/map_data", function(req, res) {
    db.Data.findAll({}).then(function(dbData) {
        res.json(dbData);
    });
 }); 

};
