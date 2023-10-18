 
import { Link } from "react-router-dom";
import Bannerbg from "./Banner/Bannerbg";
import SectionTwo from "./Banner/SectionTwo/SectionTwo";
import CarouselCar from "./CarouselCar/CarouselCar";
import Footer from "./Footer/Footer";

 

const Home = () => {
    return (
        <div>
            
             <Bannerbg></Bannerbg>
             <SectionTwo></SectionTwo>
             <div className="mt-10 flex justify-around pt-4 pb-2 items-center bg-slate-50">
                <h1 className="text-2xl font-serif font-semibold">Top Car </h1>
                <div className="grid md:flex lg:flex gap-1 md:gap-4 lg:gap-4">
                  <p className=" text-red-500 hover:underline"> <Link to="/"> FEATURED </Link> </p>  
                  <p className="hover:underline "> <Link to="/latest"> LATEST </Link> </p>  
                  <p className="hover:underline "> <Link to="/bestsell"> BESTSELL </Link> </p>  
                </div>
                <div className="">
                    <Link to="/login"><button className="btn btn-accent">Order Now</button></Link>
                </div>
             </div>
             <CarouselCar></CarouselCar>
             <Footer></Footer>
        </div>
    );
};

export default Home;