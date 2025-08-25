import React from 'react'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import { Outlet } from 'react-router-dom'
function Body() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   
   
   
   </>
  )
}

export default Body