import { IMG_CDN_URL } from "../config"
const RestaurantCard=( {name,cuisines,cloudinaryImageId,locality,area} )=>{

 
    return(
  <div className='card'>
  <img src= {IMG_CDN_URL+cloudinaryImageId} alt="" />
  <h2>{name}</h2>
  <h3 style={{wordWrap: 'break-word'}}>{cuisines?.join(",")}</h3>
  <h4>{locality}</h4>
  <h4>{area}</h4>
  </div>
    )
  }
  export default RestaurantCard