import { Link, NavLink } from "react-router-dom";
import img from './../../assets/img/Electrical-Engineering-Logo-or-Icon-Graphics-9921044-3-580x387.jpg'


const Navbar = () => {
    const navlink = <>
        <li className="mr-4 font-semibold text-xm hover:underline hover:font-bold "><NavLink to="/">Home</NavLink></li>
        <li className="mr-4 font-semibold text-xm hover:underline hover:font-bold "><NavLink to="/addproduct">Add Product</NavLink></li>
        <li className="mr-4 font-semibold text-xm hover:underline hover:font-bold "><NavLink to="/mycard">My Cart</NavLink></li>
        <li className="mr-4 font-semibold text-base rounded-xl bg-slate-100 hover:underline hover:font-bold "><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div className="bg-blue-100">
            <div className="bg-blue-100 flex justify-around px-4 py-6 items-center">
                <img className="w-20 rounded-full mb-2 " src={img} alt="" />
                <h2 className="text-2xl font-semibold font-serif">Technology and Electronics</h2>
                <div className="flex items-center">
                    <input className=" h-1/2 px-2" type="text" placeholder="search here" />
                    <button className=" px-2 btn-active">Search</button>
                </div>
            </div>

            <div className="border px-10">
                <div className="navbar px-10 py-4 bg-base-100">
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
                        <a className="btn btn-ghost font- bold normal-case text-xl  bg-sky-200 text-whie">Evolving Electronics</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navlink
                            }
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <Link to="/register"> <button className=" btn bg-sky-200 md:text-lg lg:text-lg lg:mr-4 hover:font-bold hover:underline hover:bg-orange-200">Register</button></Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;