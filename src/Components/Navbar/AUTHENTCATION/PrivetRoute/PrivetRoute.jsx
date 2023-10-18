import { useContext } from "react";
import { AuthProvider } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

 

const PrivetRoute = ({children}) => {
    const {user,loder} =useContext(AuthProvider)
    const location=useLocation()
    console.log(location.pathname);

    if(loder){
        return <span className="loading loading-spinner text-success"></span>
    }
    if(user){
        return children
    }
    return  <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;