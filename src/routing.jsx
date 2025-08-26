import React from 'react'
import { RouterProvider, Router, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Body from './components/body/body'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import Service from './components/services/service'




    const route = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Body/>}>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/Service' element={<Service/>}></Route>
                
            </Route>

        )



    )
function Routing() {
  return (
    <RouterProvider router={route}/>
  )
}

export default Routing