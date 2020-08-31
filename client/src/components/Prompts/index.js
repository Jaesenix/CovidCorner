import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link, Redirect } from "react-router-dom"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faHeadSideCough, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useStoreContext } from '../../utils/GlobalStore';



const styles = {
  statCards: {
    marginBottom: '10px',
    alignItems: 'center',
    backgroundColor: '#8F8F8F',
    textAlign: 'center',
    fontFamily: 'Nunito, sans-serif',
    borderRadius: '50%',
    width: '125px',
    height: '125px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  promptText: {
    fontFamily: 'Nunito, sans-serif',
    color: '#F5F5F5',
    fontSize: '16px'
  },
  icons: {
    color: '#F5F5F5',
    size: '2em'
  }
};

const Prompts = () => {
  const [state] = useStoreContext();

  return (
    <section>
      {!state.userLoggedIn ? (
        <div>
        <Card style={styles.statCards}>
          <Link className="prompt-link" to="/login">
            <CardContent>
              <FontAwesomeIcon icon={faHeadSideCough} style={styles.icons} size="2x" /><br></br>
              <h5 style={styles.promptText}>Take Self-Assessment<span>
              </span></h5>
            </CardContent>
          </Link>
        </Card>
        <Card style={styles.statCards}>
          <Link className="prompt-link" to="/login"> <CardContent>
            <FontAwesomeIcon icon={faHospital} style={styles.icons} size="2x" /><br></br>
            <h5 style={styles.promptText}>Find a Testing Center</h5>
          </CardContent>
          </Link>
        </Card>
        <Card style={styles.statCards}>
          <Link className="prompt-link" to="/news"> <CardContent>
            <FontAwesomeIcon icon={faNewspaper} style={styles.icons} size="2x" /><br></br>
            <h5 style={styles.promptText}>Related News</h5>
          </CardContent>
          </Link>
        </Card>
        </div>
) : (
     <div>
  <Card style={styles.statCards}>
  <Link className="prompt-link" to="/members">
    <CardContent>
      <FontAwesomeIcon icon={faHeadSideCough} style={styles.icons} size="2x" /><br></br>
      <h5 style={styles.promptText}>Take Self-Assessment<span>
      </span></h5>
    </CardContent>
  </Link>
</Card>
<Card style={styles.statCards}>
  <Link className="prompt-link" to="/members"> <CardContent>
    <FontAwesomeIcon icon={faHospital} style={styles.icons} size="2x" /><br></br>
    <h5 style={styles.promptText}>Find a Testing Center</h5>
  </CardContent>
  </Link>
</Card>
<Card style={styles.statCards}>
  <Link className="prompt-link" to="/news"> <CardContent>
    <FontAwesomeIcon icon={faNewspaper} style={styles.icons} size="2x" /><br></br>
    <h5 style={styles.promptText}>Related News</h5>
  </CardContent>
  </Link>
</Card>
</div>
 
  )
}

{
 !state.userLoggedIn ? (
  // These routes are only avaialable to LOGGED OUT users
  <>
      <Link to="/login"></Link>
      <Link to="/signup"></Link>
      {/* <Link to="/liveupdates"></Link> */}
  </>

) : (
      // These routes are only available to LOGGED IN users
      <>
      <Link exact path={["/login", "/signup"]}>
          {/* If you are logged in, going to the login/signup page will take you to the members page */}
          <Redirect to="/members" />
      </Link>
      <Link to="/members"></Link>
  </>
  )
}
{
/* These routes are ALWAYS available */
}




{ /*If none of the other pages match, redirect them to the main page */}
<Redirect to="/" />



</section>

);
}



export default Prompts;