import { Link } from "react-router-dom";


const Bannerbg = () => {
    return (
        <div className='mb-16 bg-orange-100 '>
            <hr className='w-full mb-2 bg-red-600 text-red-600' />
            <hr className='w-full mb-2 text-red-600' />
            <hr className='w-full mb-2 text-red-600' />
            <div className="hero min-h-screen mb-16" style={{ backgroundImage: 'url(https://i.ibb.co/2WxknkS/headlights-black-modern-car-close-up-modern-luxury-car-closeup-banner-background-427248-252.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="mr-10 md:mr-72 lg:mr-96 hero-content text-neutral-content">
                    <div className="mr-10 md:mr-40 lg:mr-96 px-6 py-6 ">
                        <p className="py-6 text-lg text-orange-400">'Enjoy the convenience of smooth transportation.'</p>
                        <h1 className="text-2xl md:text-4xl lg:text-4xl font-serif font-bold mb-10"> <span className="text-teal-300 font-extrabold "> Choose Your <span className="text-red-400">'CAR'</span>  <br /> </span>  and <span className="text-indigo-300">Happy Journy</span> 
                        </h1>
                        <p className="mb-5 text-lime-100">A car, a marvel of engineering, fuses function and emotion. It's an escape pod, a throne of power, and a vessel of dreams. In its purr or roar, it embodies freedom and fuels our journeys..</p>
                        <Link to="/login"><button className="btn font-semibold btn-outline btn-secondary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannerbg;