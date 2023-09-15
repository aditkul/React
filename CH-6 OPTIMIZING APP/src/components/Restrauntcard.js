import { LOGO_URL } from "../utils/Constant";

const Restrauantcard = (props) =>{
    const {resData} = props;
  
    const{cloudinaryImageId,
    name,
  cuisines,
  avgRating,
  costForTwo} = resData?.data
  //console.log(resData)
    return(
      <div className="res-card">
        <img className="fries" src={LOGO_URL+ cloudinaryImageId}/>
        <h3 >{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        
      </div>
    );
  };

  export default Restrauantcard;