import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';


const styles = {
    login: {
      fontFamily: 'Nunito, sans-serif',
      color: '#353535'
    },
    loginText: {
        fontFamily: 'Nunito, sans-serif',
      color: '#353535'
    }
  };

function Login() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleLogin = (event) => {
        event.preventDefault();
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        API.login(loginData).then(response => {
            setShowError(false);
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            });
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred during login");
        })
    }




    return <div>
        <div className="container" style={{marginTop: "80px"}}>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2 style={styles.login}>Login</h2>
                    <form className="signup" onSubmit={handleLogin}>
                        <div className="form-group" style={styles.loginText}> 
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
                        </div>
                        <div className="form-group" style={styles.loginText}>
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                        </div>
                        <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                        </div>
                        {/* <button><Link to="/members">Login</Link></button> */}
                        <button type="submit" className="btn btn-default" style={styles.loginText}>Login</button>
                    </form>
                    <br />
                    <p style={styles.loginText}>Or sign up  <Link to="/signup" style={{fontFamily: 'Nunito, sans-serif'}}>here</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default Login;