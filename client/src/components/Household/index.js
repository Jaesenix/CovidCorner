import React from "react";
import HouseholdImg from "../../assets/household.png"
import "./style.css"

const Household =() => {
  return (
      <div className="card mb-3 household-card text-center" style={{width: '80%'}}>
        <img src={HouseholdImg} className="card-img-top household-card-top align-items-center text-center" alt="Masks are important" />
          <div className="card-body">
            <h5 className="card-title">Living in Shared Housing</h5>
            <p className="card-text">When signing up you indicated that you don't follow government recommendations for wearing a mask, so we've provided some additional information and resources below on the importance of wearing masks while in public.</p>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
</div>
     
    );
}

export default Household;