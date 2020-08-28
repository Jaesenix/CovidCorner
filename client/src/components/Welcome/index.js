import React, { Component } from "react";
import { useStoreContext } from '../../utils/GlobalStore';
import Mask from '../Mask';
import Unemployed from '../Unemployed';
import Household from '../Household';

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
        {!mask && <Mask />}
        {unemployed && <Unemployed />}
        {household && <Household />}
      </>
    )
  }


export default Welcome;