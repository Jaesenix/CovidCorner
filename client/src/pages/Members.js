import React from "react"
import { useStoreContext } from '../utils/GlobalStore';
import VerticleTabs from "../components/Tabs"


function Members(){
    const [state] = useStoreContext();
    const {email} = state;
    return (
      <VerticleTabs />
    )
  //Commented out what was forked from the template just in case we need to view it later
  //   <div className="container">
  //   <div className="row">
  //     <div className="col-md-6 col-md-offset-3">
  //       <h2>Welcome {email}</h2>
  //     </div>
      
  //   </div>
  // </div>
}


export default Members;