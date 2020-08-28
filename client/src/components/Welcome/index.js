import React from "react";
import { useStoreContext } from '../../utils/GlobalStore';
import Unemployed from '../Unemployed'
import UN1 from '../../assets/UN1.jpg'
import './style.css'


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
    <div>
      <p style={styles.welcome}>Hello {email}, welcome to CovidCorner!</p>
      <div className="card-group">
        <div className="card ">
          <img src={UN1} className="card-img-top welcome-top" alt="..." /> 
        </div>
        <div class="card">
          <img src={UN1} className="card-img-top welcome-top" alt="..." /> 
        </div>
        <div class="card">
          <img src={UN1} className="card-img-top welcome-top" alt="..." /> 
        </div>
        <div>
          <Unemployed />
        </div>
      </div>
      </div>
    )
  }


export default Welcome;