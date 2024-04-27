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
const router = createBrowserRouter([
  {
    path: "/",
    element: <CenterPage></CenterPage>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>

      },
      {
        path:'/artandcraft',
        element:<Allartandcraft></Allartandcraft>
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
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
