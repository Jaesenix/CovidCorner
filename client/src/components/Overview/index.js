import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./style.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const styles = {
  topTab: {
    fontSize: '18px',
    fontFamily: 'Nunito, sans-serif',
    color: '#8F8F8F'
  }
}; 
export default function Overview() {
 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div>
      <AppBar position="static" >
        <Tabs value={value} className="label" onChange={handleChange} aria-label="simple tabs example" indicatorColor={'yellow'} style={{backgroundColor: '#8F8F8F'}}>
          <Tab label="Symptoms" {...a11yProps(0)} style={{fontSize: '14px'}}/>
          <Tab label="Prevention" {...a11yProps(1)} style={{fontSize: '14px'}}/>
          <Tab label="Treatment" {...a11yProps(2)} style={{fontSize: '14px'}}/>
        </Tabs>
      </AppBar>
      <TabPanel className="body" value={value} index={0}>
        <p className="body">COVID-19 affects different people in different ways. Infected people have had a wide range of symptoms reported – from mild symptoms to severe illness.</p>
        <p className="body">Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:</p>
        <ul className="body">
          <li>Fever or chills</li>
          <li>Cough</li>
          <li>Shortness of breath or difficulty breathing</li>
          <li>Fatigue</li>
          <li>Muscle or body aches</li>
          <li>Headache</li>
          <li>New loss of taste or smell</li>
          <li>Sore throat</li>
          <li>Congestion or runny nose</li>
          <li>Nausea or vomiting</li>
          <li>Diarrhea</li>
        </ul>
        <p className="body">Look for emergency warning signs for COVID-19. If someone is showing any of these signs, seek emergency medical care immediately:</p>
        <ul className="body">
          <li>Trouble breathing</li>
          <li>Persistent pain or pressure in the chest</li>
          <li>New confusion</li>
          <li>Inability to wake or stay awake</li>
          <li>Bluish lips or face</li>
        </ul>
        <p className="body">Call your medical provider for any other symptoms that are severe or concerning to you.</p>
        <p className="disclaimer">For informational purposes only. Consult your local medical authority for advice.</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="body">The best way to prevent illness is to avoid being exposed to this virus. Learn how COVID-19 spreads and practice these actions to help prevent the spread of this illness.</p>

<p className="body">To help prevent the spread of COVID-19, everyone should:</p>
<ul className="body">
          <li>Clean your hands often, either with soap and water for 20 seconds or a hand sanitizer that contains at least 60% alcohol.</li>
          <li>Avoid close contact with people who are sick.</li>
          <li>Put distance between yourself and other people (at least 6 feet).</li>
          <li>Cover your mouth and nose with a mask when around others.</li>
          <li>Cover your cough or sneeze with a tissue, then throw the tissue in the trash.</li>
          <li>Clean and disinfect frequently touched objects and surfaces daily.</li>
          <li>CDC recommends that people wear masks in public settings and when around people outside of their household, especially when other social distancing measures are difficult to maintain.</li>
          <li>Masks may help prevent people who have COVID-19 from spreading the virus to others.</li>
        </ul>
        <p className="disclaimer">For informational purposes only. Consult your local medical authority for advice.</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className="body">Self care<br></br></p>

<p className="body">If you have possible or confirmed COVID-19:</p>
<ul className="body">
          <li>Stay home except to get medical care.</li>
          <li>Monitor your symptoms carefully. If your symptoms get worse, call your healthcare provider immediately. </li>
          <li>Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better.</li>
          <li>If you have a medical appointment, notify your healthcare provider ahead of time that you have or may have COVID-19.</li>
          <li>Stay in a specific room and away from other people in your home. If possible, use a separate bathroom. If you must be around others, wear a mask.</li>
        </ul>
        <br></br>
<p className="body">Medical treatments</p>
<ul className="body">
          <li>Stay in touch with your doctor. Call before you get medical care.</li>
          <li>Your local health authorities may give instructions on checking your symptoms and reporting information.</li>
        </ul>
<p className="body">If someone is showing any of these signs, seek emergency medical care immediately:</p>
<ul className="body">
          <li>Trouble breathing</li>
          <li>Persistent pain or pressure in the chest</li>
          <li>New confusion</li>
          <li>Inability to wake or stay awake</li>
          <li>Bluish lips or face</li>
        </ul>
        <p className="disclaimer">For informational purposes only. Consult your local medical authority for advice.</p>
      </TabPanel>
    </div>
  );
}

