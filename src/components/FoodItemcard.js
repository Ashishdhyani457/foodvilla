import { IMG_CDN_URL } from "../config"
const FoodItemCard=( {name,imageId,price,description} )=>{

 
    return( 
    
  <div className="w-56 m-2.5 p-2.5 shadow-lg bg-blue-50">
  <img className="" src= {IMG_CDN_URL+imageId} alt="" />
  <h2 className="font-bold text-xl">{name}</h2>
  <h4>{description.slice(0, 80)}</h4>
  <h3>Price {price}</h3>
  </div>
    )
  }
  export default FoodItemCard