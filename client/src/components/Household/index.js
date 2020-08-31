import React from "react";
import HouseholdImg from "../../assets/household.png"
import "./style.css"

const Household =() => {
  return (
      <div className="card mb-3 household-card text-center" style={{width: '80%'}}>
        <img src={HouseholdImg} className="card-img-top household-card-top align-items-center text-center" alt="Masks are important" />
          <div className="card-body">
            <h4 className="card-title user-card">Living in Shared Housing</h4>
            <p className="card-text user-card">When signing up you indicated that you don't follow government recommendations for wearing a mask, so we've provided some additional information and resources below on the importance of wearing masks while in public.</p>
            <a type="button" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/shared-housing/index.html" class="btn welcome-btn" target="_blank" rel="noopener noreferrer">Living in Shared Housing</a>
            <a type="button" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/checklist-household-ready.html"class="btn welcome-btn" target="_blank" rel="noopener noreferrer">Household Checklist</a>
            <a type="button" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html" class="btn welcome-btn" target="_blank" rel="noopener noreferrer">Caring for Someone Sick</a>
          </div>
</div>
     
    );
}

export default Household;