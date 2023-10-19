import { useEffect, useState } from "react";
import ShowBestData from "./ShowBestData";
import Footer from "../Footer/Footer";

 

const Best = () => {
    const [best,setBest]=useState([])
    
    useEffect(() =>{
        fetch('/best.json')
        .then(res => res.json())
        .then(data => setBest(data) )
    },[])
    return (
        <div>
             <p className="text-center text-2xl font-semibold font-serif py-6 underline">BEST SELLING CAR</p>
             <div>
                {
                    best.map( data => <ShowBestData key={data.id} PropsBestData={data}></ShowBestData>)
                }
             </div>
             <div className="mt-16">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Best;