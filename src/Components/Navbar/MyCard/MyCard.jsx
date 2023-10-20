import { Link, useLoaderData } from "react-router-dom";
import CardDataShow from "./CardDataShow";
import { useState } from "react";



const MyCard = () => {
    const dataload = useLoaderData()
    const [user, Setuser] = useState(dataload)
    console.log(dataload);
    return (
        <div>

            <h1 className="text-2xl font-semibold font-serif text-center mt-8 bg-white mx-10 p-4">YOUR ALL ADDED PRODUCT HERE</h1>
            <div className="text-end mx-10 ">
                <Link to="/addproduct"> <button className="btn mt-10 btn-primary mb-4">Add More Product</button></Link>
            </div>
            <div>
                {
                    dataload.map(data => <CardDataShow key={data._id} PropsCarddata={data} user={user} Setuser={Setuser}></CardDataShow>)
                }
            </div>
        </div>
    );
};

export default MyCard;