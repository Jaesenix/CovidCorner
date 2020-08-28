import React, {useEffect} from "react";
import { useStoreContext } from '../../utils/GlobalStore';
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
      <>
        <div>
          <p style={styles.welcome}>Hello {name}, welcome to CovidCorner!</p>
        </div>
        <div>
          {!mask && <Masks />}
          {unemployed && <Unemployed />}
          {household && <Household />}
        </div>
      </>
    )
  }


export default Welcome;