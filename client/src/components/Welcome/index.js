import React from "react";

const styles = {

 
    welcome: {
      fontSize: '30px',
      fontFamily: 'Nunito, sans-serif',
      color: '#353535'
    }
  };
  

function Welcome () {
 return (
     <p style={styles.welcome}>Hello, welcome to CovidCorner! We're here to help inform you of all things Covid.</p>
 )
}

export default Welcome;