import React from "react";
import { ListItem } from "../SearchResults";

function Center({ name, description, address, city, state, postal_code, regular_schedule}) {
  return (
    <ListItem>
          <h3 className="font-italic">{name}</h3>
          <div className="btn-container">
            <p>{description}</p>
          </div>
          <div>
            <p>{address}  {city}, {state} {postal_code}</p>   
          </div>
    </ListItem>
  );
}

export default Center;