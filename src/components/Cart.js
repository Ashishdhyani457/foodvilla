import { useDispatch, useSelector } from "react-redux"
import FoodItemCard from "./FoodItemcard"
import { clearCart } from "../utils/cartSlice";




const Cart=()=>{
const cartItem=useSelector(store=>store.cart.items)
const dispatch=useDispatch();
const handleClearCArt=()=>{
dispatch(clearCart())
}
console.log(cartItem)
    return(<>
    
    <h1>Cart Items - {cartItem.length}</h1>
    <button className="bg-green-100 p-2 m-5 cursor-pointer" onClick={handleClearCArt}>Clear Cart</button>
    <div className="flex flex-wrap justify-between ml-2 mr-2">
      {cartItem.map((item)=>(
<div><FoodItemCard key={item.id} {...item}></FoodItemCard></div>
))}
    </div>
    
    
    </>
    )


}
export default Cart