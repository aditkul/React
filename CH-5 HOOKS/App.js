import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

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
      <Body/>
    </div>
  )
}
  

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<Applayout/>);