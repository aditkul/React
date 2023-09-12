import Restrauantcard from "./Restrauntcard";
import resList from "../utils/mockdata";
import { useState } from "react";



const Body = () => {

  const [listofres , setlistofres] =  useState(resList);

    return(
      <div className="body">
       <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredlist = listofres.filter(
            (res)=> res.data.avgRating > 4
          );
          setlistofres(filteredlist);
        }}>
        Top Rated Restrauant
        </button>
       </div>
        <div className="res-container">
        {listofres.map((restraurant) => (<Restrauantcard resData={restraurant}/>)) }
        
        </div>
      </div>
    )
  }

  export default Body;