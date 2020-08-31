import React, { useEffect } from 'react';
import { BrowserRouter as Route, Link, Redirect } from 'react-router-dom'
import { useStoreContext } from '../../utils/GlobalStore';
import API from '../../utils/API';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "../../utils/actions";
import "./style.css";
import Logo from "../../assets/newlogo.png"

function Navbar() {
    const [state, dispatch] = useStoreContext();
    const { userLoggedIn } = state;

    const logout = () => {
        API.logout().then(() => {
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }

    return (
        <div className="navbar  fixed-top navbar-dark bg-dark">
            {!userLoggedIn ? (
                // if the user is Logged out
                <div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="logo" to="/"><img id="logo" src={Logo} alt="CovidCorner Logo"></img></Link>
                        <Link className="nav-link" to="/login" style={{ fontSize: '16px' }}>Login</Link>
                    </div>
                </div>
            ) : (
                    // If the user is Logged In
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="logo" to="/"><img id="logo" src={Logo} alt="CovidCorner Logo"></img></Link>
                        <Link className="nav-link" onClick={() => logout()} to='/' style={{ fontSize: '16px' }}>Logout</Link>
                        <Link className="nav-link" to="/members" style={{ fontSize: '16px' }}>Discover</Link>
                    </div>
                )
            }

            {

                !userLoggedIn ? (
                    // These routes are only avaialable to LOGGED OUT users
                    <>
                        <Link to="/login"></Link>
                        <Link to="/signup"></Link>
                    </>

                ) : (
                        // These routes are only available to LOGGED IN users
                        <>
                            <Link exact path={["/login", "/signup"]}>
                                {/* If you are logged in, going to the login/signup page will take you to the members page */}
                                <Redirect to="/members" />
                            </Link>
                            <Link to="/members"></Link>
                        </>
                    )
            }
            { /*If none of the other pages match, redirect them to the main page */}
            <Redirect to="/" />
        </div >
    );
}

export default Navbar;