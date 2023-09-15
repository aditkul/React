import Restrauantcard from "./Restrauntcard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";



const Body = () => {

  const [listofres , setlistofres] =  useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6278172&lng=77.2189594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
  setlistofres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   console.log(listofres);
  };

    return(
      <div className="body">
       <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredlist = listofres?.filter(
            (res)=> res.data.avgRating > 4
          );
          setlistofres(filteredlist);
        }}>
        Top Rated Restrauant
        </button>
       </div>
        <div className="res-container">
        {listofres?.map((restaurant) => (<Restrauantcard key={restaurant.info.id} {...restaurant.data}/>)) }
        
        </div>
      </div>
    )
  }

  export default Body;