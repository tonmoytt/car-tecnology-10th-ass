import { Link } from "react-router-dom";


const ShowData = ({ propsData }) => {
    const { id, img, name, title, description, price, rating } = propsData;
    return (
        <div className=" mt-10 mb-4 bg-pink-500 text-red-500 ">
            <div className="card w-96 min-h-screen my-4 p-3 bg-black shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sky-400"> {title}</h2>
                    <p> {description}</p>
                    <div className="card-actions items-center mt-6 justify-end">
                        <p className="font-semibold text-lg text-white"> Price : {price}</p>

                        <Link to="/login"><button className="btn btn-warning">Buy Now</button></Link>
                    </div>

                    {/* rating */}
                    <div className="rating text-center mt-4">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>

                    {/* Details */}
                    <div>
                        <Link to={`/car/${id}`}> <button className="w-full btn  mt-6"> Details</button></Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ShowData;