
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import "./style.css"


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


export default function ResourceReviewCard() {


  return (
    <Grid container style={{textAlign: "center"}}>

{/* WHO Resource Card  */}
<Grid item xs >
<div className="resource-card">
      <List component="nav" aria-label="main mailbox folders" className="card-header">
        <ListItem >
          <ListItemText primary="World Health Organization" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">
          <ListItemText primary="Advice For The Public" />
        </ListItemLink>
        <ListItemLink href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank">
          <ListItemText primary="Questions and Answers" />
        </ListItemLink>
        <ListItemLink href="https://www.who.int/travel-advice" target="_blank">
          <ListItemText primary="Travel Advice" />
        </ListItemLink>
      </List>
    </div>
    </Grid>
    <Grid item xs>
      <div className="resource-card">
    <List component="nav" className="card-header">
        <ListItem>
          <ListItemText primary="Center for Disease Control and Prevention" className="card-header"/>
        </ListItem>
      </List>
      <Divider />
       <List component="nav" aria-label="main mailbox folders">
       <ListItemLink href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html" target="_blank">
 <ListItemText primary="Prevent Getting Sick" />
</ListItemLink>
<ListItemLink href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html" target="_blank">
 <ListItemText primary="Daily Activities and Going Out" />
</ListItemLink>
<ListItemLink href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="_blank">
 <ListItemText primary="FAQ" />
</ListItemLink>
         </List>
         </div>
   </Grid>
   <Grid item xs>
     <div className="resource-card">
   <List component="nav" className="card-header" >
        <ListItem>
          <ListItemText primary="U.S. Government" className="card-header"/>
        </ListItem>
      </List>
      <Divider />
        <List component="nav" aria-label="main mailbox folders">
        <ListItemLink href="https://www.youtube.com/watch?v=Nlyxz2X97Do" target="_blank">
  <ListItemText primary="What is Social Distancing?" />
</ListItemLink>
<ListItemLink href="https://www.usa.gov/state-health" target="_blank">
  <ListItemText primary="State Health Departments" />
</ListItemLink>
<ListItemLink href="https://www.usa.gov/unemployment" target="_blank">
  <ListItemText primary="Unemployment Help" />
</ListItemLink>
       
          </List>
          </div>
    </Grid>
   </Grid>
  );
}