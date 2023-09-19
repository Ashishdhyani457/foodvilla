
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contacts from './components/Contacts';
import RestaurantMenu from './components/RestaurantMenu';
// import Instamart from './components/Instamart';
import { lazy,Suspense, useState } from 'react';
import Shimmer from './components/Shimmer';
import UserContext from './utils/useContext';

const Instamart=lazy(()=>import('./components/Instamart'))

function AppLayout() {
  const [user,setUser]= useState({name:"Ashish Dhyani",email:"ashishdhyani457@gmail.com"})

  return (
  <>
  {/* here we are giving dynamic value to our userContext*/}
 <UserContext.Provider value={{user:user,setUser:setUser}}>

<Header></Header>
<Outlet/>
<Footer></Footer>

</UserContext.Provider>
</>
  );
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>,
    children:[ {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contacts",
      element:<Contacts/>
    },
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/restaurant/:id",
      element:<RestaurantMenu/>
    },
    {
      path:"/instamart",
      element: <Suspense fallback={<Shimmer></Shimmer>}><Instamart/></Suspense>
    },
  ]
  },
 

])
export {appRouter}
export default AppLayout;
