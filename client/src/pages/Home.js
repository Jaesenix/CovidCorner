import React from "react";
import { Grid } from '@material-ui/core';
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
        
       <div style={{marginTop: "80px"}}>
      <Grid container style={styles.container}>
        <Grid item xs={2}>
         <Stats />
       
        </Grid>
        <Grid item xs={9} style={{justifyContent: 'center'}}>
          <Map />
        </Grid>
        <Grid item xs={1}>
        <Prompts />
        </Grid>
      </Grid>
      
    </div>
    
 

    )
}

export default Home;