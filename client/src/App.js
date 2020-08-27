import React from 'react';	import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'	import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';	


import "./App.css";
import "fontsource-roboto";


import Login from "./pages/Login";	import Login from "./pages/Login";
import Navbar from "./components/Navbar";	import Navbar from "./components/Navbar";
@@ -11,24 +11,21 @@ import SignUp from "./pages/Signup";
import Members from "./pages/Members";	import Members from "./pages/Members";
import Home from "./pages/Home";	import Home from "./pages/Home";



function App() {	function App() {

  return (
    return (	    <Router>
<Router>	      <div>
    <div>	        <Navbar />
    <Navbar />	        <Switch>
    <Switch>	          <Route exact path="/" component={Home} />
    <Route exact path="/" component={Home} />	
          <Route exact path="/login" component={Login} />	          <Route exact path="/login" component={Login} />
          <Route exact path="/liveupdates" component={LiveUpdates} />	          <Route exact path="/liveupdates" component={LiveUpdates} />
          <Route exact path="/signup" component={SignUp} />	          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/members" component={Members} />	          <Route exact path="/members" component={Members} />
    </Switch>	        </Switch>

      </div>

    </Router>
    </div>	  );
 </Router>	}
    )}	


export default App;