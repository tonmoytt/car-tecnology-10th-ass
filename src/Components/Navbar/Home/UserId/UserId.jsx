import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

 

const UserId = () => {
    const loder =useParams()
    console.log(loder);
    const data2 =useLoaderData()
    const [data,setData]=useState()
    console.log(data2,data);
    return (
        <div>
            <p>user id {data?.name}</p>

            <div className=" mt-6 mb-4 p-6 bg-re-500 justify-around text-red-500 ">
                <div className="card w-full min-h-screen my-4 p-3 bg-black shadow-xl">
                    <figure><img src={data?.img} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sky-400"> {data?.title}</h2>
                        <p> {data?.description}</p>
                        <div className="card-actions items-center mt-6 justify-end">
                            <p className="font-semibold text-lg text-white"> Price : {data?.price}</p>

                            <Link to="/login"><button className="btn btn-warning">Buy Now</button></Link>
                        </div>
                    </div>
                   

                </div>

            </div>
        </div>
    );
};

export default UserId;