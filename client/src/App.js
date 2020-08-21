import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import './App.css';


import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import LiveUpdates from "./pages/LiveUpdates";
import SignUp from "./pages/Signup";

import Home from "./pages/Home";





function App() {

    return (
<Router>
    <div>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/liveUpdates" component={LiveUpdates} />
          <Route exact path="/signup" component={SignUp} />
    </Switch>


    </div>
 </Router>
    )}

export default App;