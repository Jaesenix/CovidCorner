import React from "react";
import unemployedImg from "../../assets/Unemployed.png"
import "./style.css"

const Unemployed =() => {
  return (
      <div className="card mb-3 unemployed-card text-center mx-auto" style={{width: '80%'}}>
        <img src={unemployedImg} className="card-img-top unemployed-card-top align-items-center text-center" alt="Masks are important" />
          <div className="card-body">
            <h5 className="card-title">Unemployment Help</h5>
            <p className="card-text">When signing up you indicated that you don't follow government recommendations for wearing a mask, so we've provided some additional information and resources below on the importance of wearing masks while in public.</p>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
</div>
     
    );
}

export default Unemployed;