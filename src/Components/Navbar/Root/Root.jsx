import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
 

 

const Root = () => {
    return (
        <div className="mx-1 md:mx-6 lg:mx-8 my-6 bg-emerald-100">
             
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;