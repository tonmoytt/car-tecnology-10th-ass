import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

 

const UserId = () => {
    const {id} =useParams()
    
    const data2 =useLoaderData()
    const [data,setData]=useState()
    console.log(data2);
    console.log(data);


        const findloader = data2?.find(data => data.id === parseInt(id))
        console.log(findloader);
   

    
    return (
        <div>
           

            <div className="bg-fuchsia-300">
            <h1 className="text-2xl font-sans mx-10 bg-yellow-100 p-4 font-extrabold text-center mb-10">{findloader?.name}</h1>
            </div>

            <div className=" mt-6 mb-4 p-6 bg-re-500 justify-around text-red-500 ">
                <div className="card w-full min-h-screen my-4 p-3 bg-black shadow-xl">
                    <figure><img src={findloader?.img} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sky-400"> {findloader?.title}</h2>
                        <p> {findloader?.description}</p>
                        <div className="card-actions items-center mt-6 justify-end">
                            <p className="font-semibold text-lg text-white"> Price : {findloader?.price}</p>

                            <Link to="/login"><button className="btn btn-warning">Buy Now</button></Link>
                        </div>
                    </div>
                   

                </div>

            </div>
        </div>
    );
};

export default UserId;