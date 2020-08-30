
import React from 'react';
import "./style.css"



export default function ResourceReviewCard() {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3" >
          <div className="list-group resource-card" >
            <a href="https://www.who.int/" className="list-group-item list-group-item-action active card-header" style={{ backgroundColor: '#8F8F8F' }}>
              WHO</a>
    
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }}>Advice for the Public</a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }}>Questions and answers</a>
            <a href="https://www.who.int/travel-advice" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }}>Travel Advice</a>
          </div>
        </div>

        <div className="col-md-3" >
          <div className="list-group resource-card" >
            <a href="https://www.who.int/" className="list-group-item list-group-item-action active card-header" style={{ backgroundColor: '#8F8F8F' }}>
              CDC
    </a>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }} >Prevent Getting Sick</a>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }}>Daily Activities and Going Out</a>
            <a  href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }}>Frequently Asked Questions</a>
          </div>
        </div>

        <div className="col-md-3" >
          <div className="list-group resource-card" >
            <a href="https://www.who.int/" className="list-group-item list-group-item-action active card-header" style={{ backgroundColor: '#8F8F8F' }}>
              U.S. Government
    </a>
    
            <a href="https://www.youtube.com/watch?v=Nlyxz2X97Do" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }} >What is Social Distancing?</a>
            <a href="https://www.usa.gov/state-health" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }}>State Health Departments</a>
            <a href="https://www.usa.gov/unemployment" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action card-text" style={{ backgroundColor: '#F5F5F5' }}> Unemployment Help</a>
    
          </div>
        </div>
      </div>
    </div>
  );
}