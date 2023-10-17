import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../Provider/Provider";

const Signout = () => {
    const {CreateUser} =useContext(AuthProvider)
    const hendelSignup=event =>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        const user={name,email,password}
        console.log(user);

        CreateUser(email,password)
        .then(result =>{
            console.log(result.user);
            alert('successfully signup');
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  ">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Register Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendelSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                            <div>
                                <p>Already have an account? <Link to="/login"> <button className="px-2 py-1 rounded-l-md font-semibold font-serif btn-outline btn-accent">Login</button></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signout;