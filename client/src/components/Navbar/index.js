import React, { useEffect } from 'react';
import { BrowserRouter as Route, Link, Redirect } from 'react-router-dom'

import Members from "../../pages/Members";

import { useStoreContext } from '../../utils/GlobalStore';
import API from '../../utils/API';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "../../utils/actions";
import "./style.css";
import Logo from "../../assets/logo.png"

function Navbar() {

    const [state, dispatch] = useStoreContext();
    useEffect(() => {
        // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
        API.checkUserInfo().then(response => {
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
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

    const logout = () => {
        API.logout().then(() => {
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }

    return (
        <div className="navbar navbar-dark bg-dark">
            {!state.userLoggedIn ? (
                // if the user is Logged out
                <div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="logo" to="/"><img id="logo" src={Logo} ></img></Link>
                        <Link className="nav-link" to="/liveupdates" style={{fontSize: '16px'}}>Live Updates</Link>
                        <Link className="nav-link" to="/login" style={{fontSize: '16px'}}>Login</Link>


                    </div>

                </div>
            ) : (
                    // If the user is Logged In
                    <>
                        <b>Welcome {state.email}!</b> &nbsp;&nbsp;&nbsp;
                        <Link to="/members">Members</Link> | <a onClick={() => logout()} href="#">Logout</a>
                    </>
                )
            }


            {

                !state.userLoggedIn ? (
                    // These routes are only avaialable to LOGGED OUT users
                    <>
                        <Link to="/login"></Link>
                        <Link to="/signup"></Link>
                        <Link to="/liveupdates"></Link>
                    </>

                ) : (
                        // These routes are only available to LOGGED IN users
                        <>
                            <Route exact path={["/login", "/signup"]}>
                                {/* If you are logged in, going to the login/signup page will take you to the members page */}
                                <Redirect to="/members" />
                            </Route>
                            <Route exact path="/members" component={Members} />
                        </>
                    )
            }
            {
                /* These routes are ALWAYS available */
            }




            { /*If none of the other pages match, redirect them to the main page */}
            <Redirect to="/" />



        </div >

    );
}


export default Navbar;