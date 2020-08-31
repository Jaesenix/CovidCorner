import React, { Component } from "react";
import API from "../../utils/API";

// import CircularProgress from '@material-ui/core/CircularProgress';
import "./style.css";

class NYT extends Component {
  state = {
    Results: [],
    loading: true,
  };

  // Get results from API
  componentDidMount() {
    API.getArticles()
      .then((res) => {
        console.log(res.data.response.docs);
        console.log(res.data.response.docs[1].multimedia[2].url);
        this.setState({ Results: res.data.response.docs, loading: false });
      })
      .catch((err) => console.error(err));
  }


    // Search the NY Times API for `this.state.search`
    handleChange = event => {
        event.preventDefault();
        this.Results(this.state.Results);
    };


    // Map the results

    render = () => {

        return (
            <div className="container nyt-container">
             {/* <h3>Results</h3> */}
        {this.state.Results.length ? (
          <ul className="list-unstyled">
            {this.state.Results.map((article) => (
               <div className="card nyt-card">
               <div className="card-body">
                <li className="media " key={article._id}>
                  <div>
                    <img
                    src={`http://static01.nyt.com/${article.multimedia[10].url}`}
                    alt="article img"
                    className="mr-3 align-self-start"
                  /> 
                  <h4 className="mt-0">{article.snippet}</h4>
                  </div>
                 
                 <p id="article-paragraph">{article.lead_paragraph}</p> 
                 <br></br>
                 <br></br>
                  <a className="content" href={article.web_url} target="_blank" rel="noopener noreferrer">
                    View Full Article
                  </a>
                </li>
                </div>
</div>
            ))}
            
          </ul>
       
        ) : (
          <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
          
          )}
        </div>
    );
  };
}

export default NYT;
