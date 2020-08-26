import React from "react";
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Map from '../components/Map';
import Stats from '../components/Stats';
import Prompts from '../components/Prompts';

const styles = {
  container: {
    marginLeft: 'auto', 
    marginRight: 'auto',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapTop: {
    textAlign: 'center',
    color: '#353535',
    fontFamily: 'Nunito, sans-serif'
  },
  mapTop2: {
    textAlign: 'center',
    color: '#353535',
    fontSize: 'smaller',
    fontFamily: 'Nunito, sans-serif'
  }
}; 
document.body.style.backgroundColor = "#F5F5F5";
function Home () {
    return (
        
       <div>
      <Grid container style={styles.container}>
        <Grid item xs={2}>
         <Stats />
         {/* <Prompts /> */}
        </Grid>
         <Grid item xs={2}>
        </Grid>
        <Grid item xs={8} style={{justifyContent: 'center'}}>
          <h3 style={styles.mapTop}>Total U.S. Cases by State</h3>
          <p style={styles.mapTop2}>*hover over each state to see positive cases by jurisdiction</p>
          <Map />
        </Grid>
      </Grid>
      
    </div>
    
 

    )
}

export default Home;