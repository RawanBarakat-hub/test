import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FocalX from './pages/FocalX'
import Add from './pages/Add'
import Xacademy from './pages/Xacademy'
import Service from './pages/Service'
import Root from './pages/Root'
import Login from './pages/Login'
const token=localStorage.getItem("token")
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Root token={token}/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>,
        loader:async()=>{
          let response=await fetch("https://jsonplaceholder.typicode.com/todos")
          response=await response.json()
          return response
        },
        children:[
          {
            path:"focalx",
            element:<FocalX/>,
            children:[
              {
                path:"add",
                element:<Add/>
              }
            ]
          },
          {
            path:"xacademy",
            element:<Xacademy/>
          }
        ]
      },
      {
        path:"service/:serviceName/:id",
        element:<Service/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  }
],{
  basename:"/test"
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
