import { useEffect, useState } from "react"

const useOffline =()=>{
const [isOffline,setOffline]=useState(false);
useEffect(() => {
  const handleOnline=()=>{
    setOffline(false)
  }
  const handleOffline=()=>{
    setOffline(true)
  }
  window.addEventListener("online",handleOnline)
  window.addEventListener("offline",handleOffline)

  return()=>{
    window.removeEventListener("online",handleOnline)
    window.removeEventListener("offline",handleOffline)
  }
}, [])


return isOffline;


}
export default useOffline

