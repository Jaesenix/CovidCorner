import React, { Component } from "react";
import { useStoreContext } from '../../utils/GlobalStore';

const styles = {


  welcome: {
    fontSize: '30px',
    fontFamily: 'Nunito, sans-serif',
    color: '#353535'
  }
};


const Welcome = () => {
  const [state] = useStoreContext();
  const { email, name, mask, unemployed, household } = state;
  
    return (
      <>
        <p style={styles.welcome}>Hello, welcome to CovidCorner! We're here to help inform you of all things Covid.</p>
        <h2>Welcome {email}</h2>
      </>
    )
  }


export default Welcome;