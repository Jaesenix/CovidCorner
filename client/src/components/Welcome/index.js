import React, {useEffect} from "react";
import { useStoreContext } from '../../utils/GlobalStore';
import UN1 from '../../assets/UN1.jpg'
import './style.css'
import { AUTH_SET_LOGGED_IN } from "../../utils/actions"
import API from '../../utils/API'
import Masks from '../Masks';
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
      
        <div>
          <p style={styles.welcome}>Hello {name}, welcome to CovidCorner!</p>
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
        </div>
        <div>
          {!mask && <Masks />}
          {unemployed && <Unemployed />}
          {household && <Household />}
        </div>
        </div>
      
    )
  }


export default Welcome;