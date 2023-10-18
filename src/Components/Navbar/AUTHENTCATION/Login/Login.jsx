import { useContext } from "react";
import swal from 'sweetalert';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Provider/Provider";

const Login = () => {
    const { LoginUser } = useContext(AuthProvider)
    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()

    const hendelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);

        LoginUser(email, password)
            .then(result => {
                console.log(result.user);
                swal("successfully!", "you are successfully Login!", "success");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                swal("error", "Your email and password do not match", "error");
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  ">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendelLogin} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>Do not have an account? <Link to="/register"> <button className="px-2 py-1 rounded-l-md font-semibold font-serif btn-outline btn-success">SignUp</button></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;