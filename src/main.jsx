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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/addproduct',
        element: <PrivetRoute> <Addproduct></Addproduct> </PrivetRoute>

      },
      {
        path: '/mycard',
        element:  <PrivetRoute><MyCard></MyCard></PrivetRoute>

      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Signout></Signout>

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
