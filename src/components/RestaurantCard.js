import { IMG_CDN_URL } from "../config"
const RestaurantCard=( {name,cuisines,cloudinaryImageId,locality,area} )=>{

 
    return(
  <div className="w-56 m-2.5 p-2.5 shadow-lg bg-blue-50">
  <img className="" src= {IMG_CDN_URL+cloudinaryImageId} alt="" />
  <h2 className="font-bold text-xl">{name}</h2>
  <h3 className="break-words">{cuisines?.join(",")}</h3>
  <h4>{locality}</h4>
  <h4>{area}</h4>
  </div>
    )
  }
  export default RestaurantCard