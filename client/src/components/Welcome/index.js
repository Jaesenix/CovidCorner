import React from "react";
import { useStoreContext } from '../../utils/GlobalStore';


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
        <p style={styles.welcome}>Hello {email}, welcome to CovidCorner!</p>
      </>
    )
  }


export default Welcome;