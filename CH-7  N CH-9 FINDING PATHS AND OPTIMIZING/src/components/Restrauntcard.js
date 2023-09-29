import { CDN_URL } from "../utils/Constant";

const Restrauantcard = ({cloudinaryImageId,
  name,
cuisines,
avgRating,
costForTwo}) =>{

  
    return(
      <div className="res-card">
        <img className="img" src={CDN_URL +cloudinaryImageId}/>
        <div className="ratings">
          <p style={{ margin: "0" }}>
            <strong>{name}</strong>
          </p>
        </div>
        <small>{cuisines.join(", ")}</small> <br /> <br />
        <p
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <h4
            style={avgRating > 3 ? { color: "green" } : { color: "orange" }}
          >
           ★ {avgRating}
          </h4>
          <h4>{costForTwo}</h4>{" "}
          
        </p>
      </div>
    );
  };

  export default Restrauantcard;