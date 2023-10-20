import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../Provider/Provider";
import swal from "sweetalert";

const Signout = () => {

    const [password, setpassword] = useState('')

    const { CreateUser, GoogleProvider } = useContext(AuthProvider)
    const hendelSignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, email, password }
        console.log(user);

        setpassword('')
        if (password.length < 6) {
            setpassword('password should be at least 6 character')
        }
        else if (!/[0-9]/.test(password)) {
            setpassword('Please adding Number character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setpassword('Please adding at least 1 uppercase')
            return;

        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setpassword('Please adding at least one special character')
            return;
        }

        CreateUser(email, password)
            .then(result => {
                console.log(result.user);
                swal("successful!", "Registration successfully", "success");
            })
            .catch(error => {
                console.error(error)
            })

    }

    const hendelgoogle = () => {
        GoogleProvider()
            .then(result => {
                console.log(result.user);
                swal("successful!", "Google registration successful", "success");
            })
            .catch(error => {
                console.error(error);
                alert('error')
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                            <div>
                                <p>Already have an account? <Link to="/login"> <button className="px-2 py-1 rounded-l-md font-semibold font-serif btn-outline btn-accent">Login</button></Link></p>
                            </div>

                        </form>
                        <div className="mx-6 my-4">
                            <p className="btn mt-4 btn  btn-secondary w-full"> <button onClick={hendelgoogle} className=""> Sign Up With GOOGLE</button></p>
                        </div>
                    </div>
                    <div className='bg-red-200 rounded-lg'>
                        {
                            password && <p className='mt-4 px-4 py-2 font-semibold text-2xl '> {password}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signout;