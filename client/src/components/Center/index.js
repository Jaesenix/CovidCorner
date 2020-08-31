import React from "react";
import { ListItem } from "../SearchResults";
import "./style.css"

function Center({ name, description, address, city, state, postal_code, regular_schedule}) {
  return (
    <div className="center-results" >
    <ListItem>
          <h3 className="center-name">{name}</h3>
          <div >
            <p className="center-description">{description}</p>
          </div>
          <div>
            <p className="center-address"> {address}  {city}, {state} {postal_code}</p>   
          </div>
    </ListItem>
    </div>
  );
}

export default Center;