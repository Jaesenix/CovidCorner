import React from "react";
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Map from '../components/Map';


function Home () {
    return (
        <>
       <div>
      <Grid container style={{textAlign: "center"}}>
        <Grid item xs={4} >
          <div>Statistics</div>
        </Grid>
        <Grid item xs={5}>
          <div> Map </div>
          <Map />
        </Grid>
        <Grid item xs={3}>
          <h3>Search</h3>
          <Button variant="contained" color="primary" href="/login">Check Your Sytmptoms
</Button><br>
          </br>
          <Button variant="contained">Find a Testing Center</Button>

        </Grid>
      </Grid>
     
    </div>
    
       </>

    )
}

export default Home;