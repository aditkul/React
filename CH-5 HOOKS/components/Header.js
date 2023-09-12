import { CDN_URL, LOGO_URL } from "../utils/Constant";

const Header = () => {
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={CDN_URL}/> 
        </div>
        <div className="Nav-item">
        <ul>
        <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
        </div>
      </div>
    );
  }

  export default Header;