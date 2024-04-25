import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Navbar from './assets/components/Navbar'
import Login from './assets/components/Login'
import User from "./assets/components/User"
function App() {

 
  const router=createBrowserRouter([
    {
    path:"/",
    element:<><Navbar/> <Home/></>
    },
    {
      path:"/Login",
      element:<><Navbar/> <Login/>  </>
    },{
      path:"/about",
      element:<><Navbar/> <About/>  </>
    },{
      path:"/User",
      element:<><Navbar/> <User/>  </>
    }
  ])
  return (
  
      <div>

    <RouterProvider router={router}/>
      </div>    
  )
}

export default App
