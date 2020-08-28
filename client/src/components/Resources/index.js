
import React from 'react';
import "./style.css"



export default function ResourceReviewCard() {


  return (
    <div className="container">
      <div className="row">

        <div className="col-md-3" >
          <div className="list-group" >
            <a href="https://www.who.int/" className="list-group-item list-group-item-action active card-header" style={{ backgroundColor: '#8F8F8F' }}>
              World Health Organization
    </a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" className="list-group-item list-group-item-action card-text" >Advice for the Public</a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank" className="list-group-item list-group-item-action card-text">Questions and answers</a>
            <a href="https://www.who.int/travel-advice" target="_blank" className="list-group-item list-group-item-action card-text">Travel Advice</a>
          </div>
        </div>

        <div className="col-md-3" >
          <div className="list-group" >
            <a href="https://www.who.int/" className="list-group-item list-group-item-action active card-header" style={{ backgroundColor: '#8F8F8F' }}>
              CDC
    </a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" className="list-group-item list-group-item-action card-text" >Advice for the Public</a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank" className="list-group-item list-group-item-action card-text">Questions and answers</a>
            <a href="https://www.who.int/travel-advice" target="_blank" className="list-group-item list-group-item-action card-text">Travel Advice</a>
          </div>
        </div>

        <div className="col-md-3" >
          <div className="list-group" >
            <a href="https://www.who.int/" className="list-group-item list-group-item-action active card-header" style={{ backgroundColor: '#8F8F8F' }}>
              U.S. Government
    </a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" className="list-group-item list-group-item-action card-text" >Advice for the Public</a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank" className="list-group-item list-group-item-action card-text">Questions and answers</a>
            <a href="https://www.who.int/travel-advice" target="_blank" className="list-group-item list-group-item-action card-text">Travel Advice</a>
          </div>
        </div>
      </div>
    </div>
  );
}