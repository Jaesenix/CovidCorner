import React from "react";
import unemployedImg from "../../assets/Unemployed.png"
import "./style.css"

const Unemployed =() => {
  return (
      <div className="card mb-3 unemployed-card text-center mx-auto" style={{width: '80%'}}>
        <img src={unemployedImg} className="card-img-top unemployed-card-top align-items-center text-center" alt="Masks are important" />
          <div className="card-body">
            <h4 className="card-title user-card">Unemployment Help</h4>
            <p className="card-text user-card">When signing up you indicated that you are unemployed due to the pandemic, so we've provided some information below on unemployment relief, finding out if you qualify and how to apply with your state government.</p>
            <a href="https://www.dol.gov/coronavirus/unemployment-insurance" type="button" class="btn welcome-btn" target="_blank" rel="noopener noreferrer">Relief</a>
            <a href="https://www.usa.gov/unemployment" type="button" class="btn welcome-btn" target="_blank" rel="noopener noreferrer">Help</a>
            <a href="https://www.careeronestop.org/LocalHelp/UnemploymentBenefits/unemployment-benefits.aspx" type="button" class="btn welcome-btn" target="_blank" rel="noopener noreferrer">Apply for Benefits</a>
          </div>
</div>
     
    );
}

export default Unemployed;