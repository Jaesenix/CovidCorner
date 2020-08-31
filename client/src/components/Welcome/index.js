import React, { useEffect } from "react";
import { useStoreContext } from '../../utils/GlobalStore';
import UN1 from '../../assets/UN1.jpg'
import UN2 from '../../assets/UN2.jpg'
import UN3 from '../../assets/UN3.jpg'
import './style.css'
import { AUTH_SET_LOGGED_IN } from "../../utils/actions"
import API from '../../utils/API'
import Masks from '../Masks';
import Unemployed from '../Unemployed';
import Household from '../Household';


const styles = {


  welcome: {
    fontSize: '25px',
    fontFamily: 'Nunito, sans-serif',
    color: '#353535',
  }
};


const Welcome = () => {
  const [state, dispatch] = useStoreContext();
  const { name, mask, unemployed, household } = state;
  useEffect(() => {
    API.checkUserInfo().then(response => {
      const { name, mask, unemployed, household } = response.data;
      dispatch({
        type: AUTH_SET_LOGGED_IN,
        data: {
          name,
          mask,
          unemployed,
          household
        }
      })
    })
  }, []);



  return (

    <div className="welcome-container">
      <p style={styles.welcome}>Hello {name}, welcome to CovidCorner!</p>
      <div className="card-group">
        <div className="card ">
          <img src={UN2} className="card-img-top welcome-top" alt="..." />
          <img src={UN1} className="card-img-top welcome-top2" alt="..." />
          <img src={UN3} className="card-img-top welcome-top" alt="..." />
        </div>
      </div>
      <div class="data-cards" >
        {!mask && <Masks />}
        {unemployed && <Unemployed />}
        {household && <Household />}
      </div>
    </div>


  )
}


export default Welcome;