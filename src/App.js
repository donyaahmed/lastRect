import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
 import Layout from './components/layout/Layout.jsx'
 import Login from './components/login/Login.jsx'
 import Register from './components/register/Register.jsx'

export default function App() {
  const routes=createBrowserRouter([
    {path:'',element:<Layout></Layout>,children:[
    {index:true,element:<Login></Login>},
    {path:'/register',element:<Register></Register>}

    ]}
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
