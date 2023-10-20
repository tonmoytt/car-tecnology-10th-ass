/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import swal from "sweetalert";



const CardDataShow = ({ PropsCarddata, Setuser, user }) => {
    const { _id, image, name, brandnm, category, Description, Price, rating } = PropsCarddata

    const hendelDelete = id => {
        fetch(`https://assigment-10-serverside.vercel.app/user/${id}`, {
            method: 'DELETE'
        })
            .then(result => {
                console.log(result.user);
            })
            .then(data => {
                console.log(data);
                if(data.deletedCount !==0){
                    swal("Deleted", "Successfully Delete", "success");
                }
                
                
                const remaining = user.filter(data => data?._id !== id)
                Setuser(remaining)

                
            })
    }
    return (
        <div>

            <div className=" mt-10 mb-4 bg-pink-500 text-red-500 ">
                <div className="card w-full min-h-screen my-4 p-3 bg-black shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sky-400"> {name}</h2>
                        <p> {brandnm}</p>
                        <p> {category}</p>
                        <p> {Description}</p>
                        <p> {rating}</p>
                        <div className="card-actions items-center mt-6 justify-end">
                            <p className="font-semibold text-lg text-white"> Price : {Price}</p>

                            <Link ><button onClick={() => hendelDelete(_id)} className="btn btn-outline btn-error">Deleted</button></Link>
                            <Link to={`/user/${_id}`}><button className="btn  btn-outline btn-secondary">Edit</button></Link>
                            <Link to="/login"><button className="btn btn-warning">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDataShow;