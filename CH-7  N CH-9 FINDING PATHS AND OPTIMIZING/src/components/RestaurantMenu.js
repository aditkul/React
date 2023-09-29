import { useEffect,useState } from "react";
import Shimer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () =>{
    
const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

       if(resInfo === null) return <Shimer/>
       const {name , cuisines , costForTwoMessage , cloudinaryImageId}=
       resInfo?.cards[0]?.card?.card?.info ;
       

       const {itemCards , imageId} =
       resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
       
       console.log(itemCards);
    return(
        <div className="menu">
        <img className="res-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId }/>
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul className="list">
                {itemCards.map((item)=>(
                    <li key={item?.card?.info?.id}  className="list-items" >  <img className="item-img " src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ item?.card?.info?.imageId} />{item?.card?.info?.name} - Rs {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                    </li>
                    
                ))}
            </ul>
            
        </div>
    );
};

export default RestaurantMenu;