import { Link, NavLink } from "react-router-dom";
import img from './../../assets/img/car img/automotive.png'
import img2 from './../../assets/img/car img/mailuser.logo.jpg'
import { useContext } from "react";
import { AuthProvider } from "./AUTHENTCATION/Provider/Provider";
import swal from "sweetalert";


const Navbar = () => {
    const { user, SignOut } = useContext(AuthProvider)

    const hendelout = () => {
        SignOut()
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.error(error);
                swal({
                    title: "Opps!",
                    text: "Successfull Logout",
                    icon: "success",
                    button: "Opps!",
                });

            })
    }
    const navlink = <>
        <li className="mr-2 font-semibold text-lg hover:underline hover:font-bold "><NavLink to="/">Home</NavLink></li>
        <li className="mr-2 font-semibold text-lg hover:underline hover:font-bold "><NavLink to="/addproduct">Add Product</NavLink></li>
        <li className="mr-2 font-semibold text-lg hover:underline hover:font-bold "><NavLink to="/mycard">My Cart</NavLink></li>
        
    </>
    return (
        <div className="bg-orange-300">





            <div className="bg-blue-200 grid md:flex lg:flex gap-6 justify-around px-4 py-6 items-center">
                <img className="w-20 rounded-full mb-2 " src={img} alt="" />
                <h2 className="text-4xl font-semibold font-serif">Automotive Car</h2>
                <div className="flex gap-1 items-center">
                    <input className=" h-1/2 px-2 py-1 rounded-md" type="text" placeholder="search here" />
                    <button className="rounded-md px-2 btn-active">Search</button>
                </div>
            </div>

            <div className="border  px-1 md:px-8 lg:px-8">
                <div className="navbar px-1 md:px-8 lg:px-10 py-4 bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navlink
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost font- bold normal-case text-xl  bg-sky-200 text-whie">Urban Motors</a>
                    </div>
                    <div className="navbar-center hidden grid lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navlink
                            }
                        </ul>
                    </div>
                



                    <div className="navbar-end">


                        {
                            user ?<>
                                <span> {user.email} <img src={user.img} alt="" /></span>  <button onClick={hendelout} className=" btn btn-sm  bg-sky-200 md:text-lg lg:text-lg lg:mr-4 hover:font-bold hover:underline hover:bg-orange-200">SignOut</button></>
                                :
                                <>
                                <div className="items-center flex">
                                <img className="w-14 rounded-full pr-2 " src={img2} alt="" />
                                <Link to="/login"> <button className=" btn btn-sm  bg-sky-200 md:text-lg lg:text-lg lg:mr-4 hover:font-bold hover:underline hover:bg-orange-200">Login</button></Link>
                                </div>
                                 </>
                        }


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;