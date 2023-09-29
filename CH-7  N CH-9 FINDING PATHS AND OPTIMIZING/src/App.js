import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

/**
 * Header
 * - logo
 * - nav items
 * Body
 * - search
 * - restrauantcontainer
 * - restrauantcard
 *    --img
 *    --name of res,star rating , cusinies , dlvry tme
 * Footer
 * -copywright
 * -links
 * -address
 * -contact
 */
      


            

const Applayout = () => {
  return(
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
};
const router = createBrowserRouter([

  {
    path:"/",
    element:<Applayout/>,
    children:[{
      path:"/",
    element:<Body/>
    },

      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  


]);
  

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<RouterProvider router={router}/>);