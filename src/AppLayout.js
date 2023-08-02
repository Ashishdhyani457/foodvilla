
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contacts from './components/Contacts';
import RestaurantMenu from './components/RestaurantMenu';

function AppLayout() {
  return (
 <>
<Header></Header>
<Outlet/>
<Footer></Footer>

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
  ]
  },
 

])
export {appRouter}
export default AppLayout;
