
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';
import WHO from '../../assets/WHO.jpg';
import CDC from '../../assets/cdc.jpg';
import USA from '../../assets/usa.png';
import "./style.css"


const useStyles = makeStyles((theme) => ({
  root: {
    width: 325,
    marginRight: 10,
    marginBottom: 20,
    fontFamily: 'Nunito, sans-serif',
    fontSize: '50px'
  },
  media: {
    height: 'auto',
    paddingTop: '56.25%', // 16:9
    objectFit: 'cover'

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}



export default function ResourceReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <Grid container style={{textAlign: "center"}}>

{/* WHO Resource Card  */}
<Grid item xs>
    <Card className={classes.root}>
      <CardHeader
       
        title="World Health Organization"
       
      />
      <CardMedia 
        className={classes.media}
        image={WHO}
        title="WHO"
        style={{objectFit: 'cover'}}
      />
      <CardContent>
     
      </CardContent>
      <CardActions disableSpacing>
   
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <List component="nav" aria-label="main mailbox folders">
        <ListItemLink href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">
  <ListItemText primary="Advice for the Public"/>
</ListItemLink>
<ListItemLink href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank">
  <ListItemText primary="Questions and Answers" />
</ListItemLink>
<ListItemLink href="https://www.who.int/travel-advice" target="_blank">
  <ListItemText primary="Travel Advice" />
</ListItemLink>
               </List>
        </CardContent>
      </Collapse>
    </Card>

{/* CDC Resource Card */}
    </Grid>
    <Grid item xs>
     <Card className={classes.root}>
     <CardHeader
      
       title="Centers for Disease Control and Prevention"
      
     />
     <CardMedia
       className={classes.media}
       image={CDC}
       title="WHO"
       
     />
     <CardContent>
    
     </CardContent>
     <CardActions disableSpacing>
  
       <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: expanded1,
         })}
         onClick={handleExpandClick1}
         aria-expanded={expanded1}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>
     <Collapse in={expanded1} timeout="auto" unmountOnExit>
       <CardContent>
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
       </CardContent>
     </Collapse>
   </Card>
   </Grid>

   {/* National Insititues of Health */}
   <Grid item xs>
    <Card className={classes.root}>
      <CardHeader
       
        title="U.S. Government Services"
       
      />
      <CardMedia
        className={classes.media}
        image={USA}
        title="WHO"
      />
      <CardContent>
     
      </CardContent>
      <CardActions disableSpacing>
   
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
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
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
   </Grid>
  );
}