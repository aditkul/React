import { CDN_URL, LOGO_URL } from "../utils/Constant";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  const [listofres , setlistofres] =  useState([]);
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/> 
        </div>
        
        <div className="Nav-item">
          
        
        <ul>
      <li><Link to="/"  className="Link">Home</Link></li>
        <li><Link to="/about" className="Link">About</Link></li>
          <li><Link to="/contact" className="Link">Contact us</Link></li>
          
          <li>Cart</li>
        </ul>
        </div>
      </div>
    );
  }

  export default Header;