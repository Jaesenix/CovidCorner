import React from "react";
import NYT from "../components/NYTimes";
import Mapbox from "../components/Mapbox";

function LiveUpdates () {
    return (
       <div>
           <NYT></NYT>
           <Mapbox></Mapbox>
       </div>
    )
}

export default LiveUpdates;