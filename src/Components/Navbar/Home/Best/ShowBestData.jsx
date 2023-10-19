import { Link } from "react-router-dom";

 

const ShowBestData = ({PropsBestData}) => {
     
    const { img, name, title, description, price} = PropsBestData;
    return (
        <div className=" mt-6 mb-4 p-6 bg-re-500 justify-around text-red-500 ">
            <div className="card w-full min-h-screen my-4 p-3 bg-black shadow-xl">
                <figure><img src={img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sky-400"> {title}</h2>
                    <p> {description}</p>
                    <div className="card-actions items-center mt-6 justify-end">
                        <p className="font-semibold text-lg text-white"> Price : {price}</p>

                        <Link to="/login"><button className="btn btn-warning">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowBestData;