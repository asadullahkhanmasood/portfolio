import React from 'react'
import { RouterProvider, Router, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Body from './components/body/body'
import Home from './components/home/home'




    const route = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Body/>}>
                <Route path='/home' element={<Home/>}/>
                
            </Route>

        )



    )
function Routing() {
  return (
    <RouterProvider router={route}/>
  )
}

export default Routing