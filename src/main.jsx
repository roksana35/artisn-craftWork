import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router-dom";
import CenterPage from './Layout/CenterPage';
import Errorpage from './Components/Errorpage';
import Login from './Components/Login';
import Registerpage from './Components/Registerpage';
import AuthProvider from './Provider/AuthProvider';
import HomePage from './Components/HomePage';
import Allartandcraft from './Components/Allartandcraft';
import Addcraftitem from './Components/Addcraftitem';
import Myart from './Components/Myart';
import Details from './Components/Details';
import Priveteroute from './Components/Priveteroute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <CenterPage></CenterPage>,
    
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>,
        loader:()=>fetch("http://localhost:5000/addcraft")

      },
      {
        path:'/artandcraft',
        element:<Allartandcraft></Allartandcraft>,
        loader:()=>fetch('http://localhost:5000/addcraft/')
      },
      {
        path:'/addcraft',
        element:<Addcraftitem></Addcraftitem>

      },{
        path:'/myart',
        element:<Myart></Myart>
      }
      
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },{
    path:'/register',
    element:<Registerpage></Registerpage>
  },{
    path:'/craft/:id',
    element: <Priveteroute><Details></Details></Priveteroute>,
    loader:()=>fetch("http://localhost:5000/addcraft/")
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
