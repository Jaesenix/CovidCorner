import React from "react";
import wearMasks from "../../assets/mask.png"
import "./style.css"

const Nothing =() => {
  return (
      <div className="card mb-3 nothing-card text-center" style={{width: '80%'}}>
        <img src={wearMasks} className="card-img-top nothing-card-top align-items-center text-center" alt="Masks are important" />
          <div className="card-body">
            <h5 className="card-title">Use of Masks to Help Slow the Spread of COVID-19</h5>
            <p className="card-text">When signing up you indicated that you don't follow government recommendations for wearing a mask, so we've provided some additional information and resources below on the importance of wearing masks while in public.</p>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
</div>
     
    );
}

export default Nothing;