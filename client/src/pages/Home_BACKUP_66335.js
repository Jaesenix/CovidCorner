import React from "react";
import { Grid, Button } from '@material-ui/core';
<<<<<<< HEAD
import {Link} from "react-router-dom";

=======
import { Link } from 'react-router-dom';
import Map from '../components/Map';
>>>>>>> 64a0c3868f497c65496c61dd8241abad9c200409


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
          <Link to="/login"><Button variant="contained">Take Self-Assessment</Button></Link><br>
          </br>
          <Link to="/login"><Button variant="contained">Find a Testing Center</Button></Link>

        </Grid>
      </Grid>
      
    </div>
    
       </>

    )
}

export default Home;