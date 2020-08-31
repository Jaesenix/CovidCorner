import React from "react";
import wearMasks from "../../assets/mask.png"
import "./style.css"

const Masks =() => {
  return (
      <div className="card mb-3 mask-card text-center" style={{width: '80%'}}>
        <img src={wearMasks} className="card-img-top mask-card-top align-items-center text-center" alt="Masks are important" />
          <div className="card-body">
            <h4 className="card-title user-card">Use of Masks to Help Slow the Spread of COVID-19</h4>
            <p className="card-text user-card">When signing up you indicated that you don't follow government recommendations for wearing a mask, so we've provided some additional information and resources below on the importance of wearing masks while in public.</p>
            <a type="button" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html" class="btn welcome-btn" target="_blank" rel="noopener noreferrer">Why Wear a Mask?</a>
            <a type="button" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-make-cloth-face-covering.htmlclass=" class="btn welcome-btn" target="_blank" rel="noopener noreferrer">How to Make a Mask</a>
            <a type="button" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html" class="btn welcome-btn" target="_blank" rel="noopener noreferrer">Choosing a Mask</a>
          </div>
</div>
     
    );
}

export default Masks;
