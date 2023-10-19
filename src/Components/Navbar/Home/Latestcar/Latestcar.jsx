import { useEffect, useState } from "react";
import ShowlatestCar from "./ShowlatestCar";
import Footer from "../Footer/Footer";

 

const Latestcar = () => {

    const [latest,setLatest] = useState([])
    useEffect(() =>{
        fetch('/latest.json')
        .then(res => res.json())
        .then(data => setLatest(data))
    },[])
    return (
        <div>
            <p className="text-center text-2xl font-semibold font-serif py-6 underline">OUR   LATEST   CAR</p>
            <div className="  bg-pink-300">
                {
                    latest.map(data => <ShowlatestCar key={data.id} propsLatestData={data}></ShowlatestCar> )
                }
            </div>
            <div className="mt-16">
            <Footer></Footer>
            </div>
            
            
        </div>
    );
};

export default Latestcar;