import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Assessment from "../Assessment";
import ResourceCard from "../Resources";
import Overview from  "../Overview"
import "./style.css"
import Welcome from "../Welcome"
import TestingCenter from "../TestingCenters"



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const styles = {
  tabLabel: {
    fontSize: '16px',
    fontFamily: 'Nunito, sans-serif',
    color: '#353535'
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
    paddingBottom: '60px'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    fontSize: '20px'
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs style={{width: '250px'}}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Welcome" {...a11yProps(0)} style={styles.tabLabel}/>
        <Tab id="tabLabel" label="Symptoms, Prevention and Treatment" {...a11yProps(1)} style={styles.tabLabel}/>
        <Tab label="Self-Assessment" {...a11yProps(2)} style={styles.tabLabel}/>
        <Tab label="Find a Testing Center" {...a11yProps(3)} style={styles.tabLabel}/>
        <Tab label="Additional Resources" {...a11yProps(4)} style={styles.tabLabel}/>
        
      </Tabs>
      <TabPanel className="panel" value={value} index={0} style={{backgroundColor: '#F5F5F5'}}>
       <Welcome />
      </TabPanel>

      <TabPanel className="panel" value={value} index={1} style={{backgroundColor: '#F5F5F5'}}>
      <Overview />
      </TabPanel>
      
      <TabPanel className="panel" value={value} index={2} style={{backgroundColor: '#F5F5F5'}}>
      <Assessment />
      </TabPanel>

      <TabPanel value={value} index={3} style={{backgroundColor: '#F5F5F5'}}>
       Find a Testing Center
       <TestingCenter />
      </TabPanel>

      <TabPanel className="panel" value={value} index={4} style={{backgroundColor: '#F5F5F5'}}>
      <ResourceCard />
      </TabPanel>

    </div>
  );
}