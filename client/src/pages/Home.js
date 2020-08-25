import React from "react";
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Map from '../components/Map';
<<<<<<< HEAD
import Navbar from '../components/Navbar';
=======
import Stats from '../components/Stats';
>>>>>>> d31d5be9ac3a479bb620c76d3e59c4690c521568


function Home () {
    return (
        <>
       <div>
      <Grid container style={{textAlign: "center"}}>
        <Grid item xs={4} >
          <div>Statistics</div>
          <Stats />
        </Grid>
        <Grid item xs={5}>
          <div> Map </div>
          <Map />
        </Grid>
        <Grid item xs={3}>
          <h3>Search</h3>
          <Link to="/members"><Button variant="contained">Take Self-Assessment</Button></Link><br>
          </br>
          <Link to="/login"><Button variant="contained">Find a Testing Center</Button></Link>

        </Grid>
      </Grid>
      
    </div>
    
       </>

    )
}

export default Home;