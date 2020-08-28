import React, { Component } from "react";
import API from "../../utils/API";

// import CircularProgress from '@material-ui/core/CircularProgress';
import "./style.css";

class NYT extends Component {
  state = {
    Results: [],
    loading: true,
  };

<<<<<<< HEAD
    ;
=======
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
>>>>>>> 61ae084d5c716a4979ba740640212a05d795e333

  // Search the NY Times API for `this.state.search`
  handleChange = (event) => {
    event.preventDefault();
    this.Results(this.state.Results);
  };

  // Map the results

<<<<<<< HEAD
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
                    src={`http://static01.nyt.com/${article.multimedia[2].url}`}
                    alt="article img"
                    className="mr-3 align-self-start"
                  /> 
                  <h4 className="mt-0">{article.snippet}</h4>
                  </div>
                 
                 <p id="article-paragraph">{article.lead_paragraph}</p> 
                 <br></br>
                 <br></br>
                  <a className="content" href={article.web_url} target="_blank">
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
=======
  render = () => {
    return (
      <div id="nytimes">
        <h3>Results</h3>
        {this.state.Results.length ? (
          <ul>
            {this.state.Results.map((article) => (
              <div>
                <li key={article._id}>
                  <h5 className="h5nytimes">{article.snippet}</h5>
                  <img
                    src={`http://static01.nyt.com/${article.multimedia[2].url}`}
                    alt="article img"
                  />
                  <p className="pnytimes">{article.lead_paragraph}</p>
                  <a href={article.web_url} target="_blank">
                    View
                  </a>
                </li>
              </div>
            ))}
            ;
          </ul>
        ) : (
          <p>Results</p>
          //                 <div>
          //   <CircularProgress />
          // </div>
        )}
      </div>
>>>>>>> 61ae084d5c716a4979ba740640212a05d795e333
    );
  };
}

export default NYT;
