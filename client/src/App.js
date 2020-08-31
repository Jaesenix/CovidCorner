import React, { useEffect }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStoreContext } from './utils/GlobalStore'
import "./App.css";
import API from './utils/API';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "./utils/actions";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import SignUp from "./pages/Signup";
import Members from "./pages/Members";
import Home from "./pages/Home";


function App() {
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
    API.checkUserInfo().then(response => {
      const { email, name } = response.data;
      dispatch({
        type: AUTH_SET_LOGGED_IN,
        data: {
          email,
          name,
        }
      })
    }).catch(err => {
      // Not able to be logged in, leave us logged out
      console.log("error", err);
      dispatch({
        type: AUTH_SET_LOGGED_OUT
      })
    })
  }, []);

  return (
    <Router>
      <div>
        <Navbar userLoggedIn={state.userLoggedIn} />
</div>
<div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/news" component={News} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/members" component={Members} />
        </Switch>
      </div>
     
    </Router>
  );
}

export default App;
