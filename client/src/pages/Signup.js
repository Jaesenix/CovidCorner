import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';

const styles = {
    signup: {
        fontFamily: 'Nunito, sans-serif',
        color: '#353535'
    },
    signupText: {
        fontFamily: 'Nunito, sans-serif',
        color: '#353535'
    }
};

function Signup() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const maskRef = useRef();
    const unemployedRef = useRef();
    const householdRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleSignup = (event) => {
        event.preventDefault();
        const signupData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            mask: maskRef.current.value,
            unemployed: unemployedRef.current.value,
            household: householdRef.current.value
        };
        API.signup(signupData).then(response => {
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            });
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred while signing up");
        })
    }

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2 style={styles.signup}>Sign Up Form</h2>
                    <form className="signup" onSubmit={handleSignup}>
                        <div className="form-group" style={styles.signupText}>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
                        </div>
                        <div className="form-group" style={styles.signupText}>
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                        </div>
                        <div class="form-group" style={styles.signupText}>
                            <label for="exampleFormControlSelect1">Do you follow government recommendations on mask usage?</label>
                            <select class="form-control" ref={maskRef}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div class="form-group" style={styles.signupText}>
                            <label for="exampleFormControlSelect1">Are you currently unemployed due to COVID?</label>
                            <select class="form-control" ref={unemployedRef} >
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div class="form-group" style={styles.signupText}>
                            <label for="exampleFormControlSelect1">Do you live in a shared household?</label>
                            <select class="form-control" ref={householdRef}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                        </div>
                        <button type="submit" className="btn btn-default" style={styles.signupText}>Sign Up</button>
                    </form>
                    <br />
                    <p style={styles.signupText}>Or log in <Link to="/login" style={{ fontFamily: 'Nunito, sans-serif' }}>here</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default Signup;