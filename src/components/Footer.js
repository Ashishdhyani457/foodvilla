import { useContext } from "react"
import UserContext from "../utils/useContext"

const Footer = ()=>{
    const {user}=useContext(UserContext)
    return <div className=" h-10 flex justify-center  font-bold text-red-800">This site is developed by {user.name}</div>
   }

   export default Footer