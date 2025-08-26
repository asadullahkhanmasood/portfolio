import React from 'react'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Contact from '../contact/contact.jsx'
import Home from '../home/home.jsx'
import { Outlet } from 'react-router-dom'
function Body() {
  return (
   <>
   <Header/>

      {/* <Contact/> */}
   <Outlet/>
   <Footer/>
   
   
   
   </>
  )
}

export default Body