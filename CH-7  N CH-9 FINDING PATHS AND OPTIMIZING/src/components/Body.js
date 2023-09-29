import Restrauantcard from "./Restrauntcard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimer from "./shimmer";
import { Link } from "react-router-dom";



const Body = () => {

  const [listofres , setlistofres] =  useState([]);
  const [searchtext , setsearchtext] = useState("");
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7630356&lng=76.6528225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
   

  setlistofres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   console.log(listofres);
  };

  

    return listofres.length === 0 ? <Shimer/> :(
      <div className="body">
       <div className="filter">
       <div className="searchbar">
          <input type="text" className="searchbox"value={searchtext} onChange={(e) => {
              setsearchtext(e.target.value);
          }}/>
          <button className="searchbtn" onClick={() => {
            console.log(searchtext)

            const filteredrestaurant = listofres.filter((res)=> res.infoWithStyle?.name.includes(searchtext));
            setlistofres(filteredrestaurant);

          }}>Search</button>

        </div>
        <button className="filter-btn" onClick={() => {
          const filteredlist = listofres?.filter(
            (res)=> res.info?.avgRating > 4
          );
          setlistofres(filteredlist);
        }}>
        Top Rated Restaurant
        </button>
       </div>
        <div className="res-container">
        {listofres?.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="Link"> <Restrauantcard{...restaurant.info}/></Link>)) }
        
        </div>
      </div>
    )
  }

  export default Body;
  