import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Navbar/Root/Root.jsx';
import Home from './Components/Navbar/Home/Home';
import Addproduct from './Components/Navbar/Addproduct/Addproduct';
import MyCard from './Components/Navbar/MyCard/MyCard';
import Login from './Components/Navbar/AUTHENTCATION/Login/Login';
import Signout from './Components/Navbar/AUTHENTCATION/Signout/Signout';
import Provider from './Components/Navbar/AUTHENTCATION/Provider/Provider';
import PrivetRoute from './Components/Navbar/AUTHENTCATION/PrivetRoute/PrivetRoute';
import Latestcar from './Components/Navbar/Home/Latestcar/Latestcar';
// import Bestsell from './Components/Navbar/Home/Bestsell/Bestsell';
import Best from './Components/Navbar/Home/Best/Best';
import Error from './Components/Navbar/Home/Error/Error';
import UserId from './Components/Navbar/Home/UserId/UserId';
import UpdateUser from './Components/Navbar/MyCard/UpdateUser';
// import DetialsId from './DetialsId';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
         loader: () => fetch('/data.json'),

      },
      {
        path: '/addproduct',
        element: <PrivetRoute> <Addproduct></Addproduct> </PrivetRoute>

      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Signout></Signout>

      },
      {
        path: '/latest',
        element:<PrivetRoute><Latestcar></Latestcar></PrivetRoute> 

      },
      {
        path: '/bestsell',
        element:<PrivetRoute> <Best></Best> </PrivetRoute> 

      },
      {
        path: '/user/:id',
        element:<PrivetRoute>  <UserId></UserId> </PrivetRoute> ,
        loader: () => fetch('/data.json'),

      },

      // {
      //   path:'/user/:id',
      //   element:<PrivetRoute> <DetialsId></DetialsId> </PrivetRoute>,
      //   loader: ({params}) => fetch(`https://assigment-10-serverside.vercel.app/product/${params.id}`)
      // },
      {
        path: '/mycard',
        element:<PrivetRoute><MyCard></MyCard> </PrivetRoute> ,
        loader:() => fetch('https://assigment-10-serverside.vercel.app/user')

      },
      {
        path: '/user/:id',
        element:<PrivetRoute>  <UpdateUser></UpdateUser> </PrivetRoute> ,
        loader:({params}) => fetch(`https://assigment-10-serverside.vercel.app/user/${params.id}`)

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
