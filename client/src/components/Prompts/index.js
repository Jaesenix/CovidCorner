import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link }  from "react-router-dom"
import "./style.css"

const styles = {
    statCards: {
      marginBottom: '10px',
      alignItems: 'center',
      backgroundColor: '#8F8F8F',
      textAlign: 'center',
      fontFamily: 'Nunito, sans-serif',
      height: 'auto',
      width: 'auto',
    },
    promptText: {
        fontFamily: 'Nunito, sans-serif',
        color: '#F5F5F5'
    }
  }; 

function Prompts () {

return (
    <section>
        <Card  style={styles.statCards}>
        <Link className="prompt-link" to="/login">
          <CardContent>
            <h5 style={styles.promptText}>Take Self-Assessment<span> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></span></h5>
          </CardContent>
          </Link>
        </Card>
        <Card style={styles.statCards}>
        <Link className="prompt-link" to="/login"> <CardContent>
          <h5 style={styles.promptText}>Find a Testing Center<span> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></span></h5>
          </CardContent>
          </Link>
        </Card>

        </section>
);
}

export default Prompts;