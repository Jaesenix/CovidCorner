import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import './App.css';

// import Home from "./pages/Home";
// import Login from "./pages/Login";
import Navbar from "./components/Navbar"
import Login from "./pages/Login";
import Home from "./pages/Home";



function App() {

    return (
        <Router>
        <>
      <Navbar />
      <Route exact path="/" component={Home} />
     
</>
</Router>

    );
}

export default App;