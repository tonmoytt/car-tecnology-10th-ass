
// import { Link, } from "react-router-dom";
import Bannerbg from "./Banner/Bannerbg";
import SectionTwo from "./Banner/SectionTwo/SectionTwo";
import CarouselCar from "./CarouselCar/CarouselCar";
import Footer from "./Footer/Footer";
import ShowHomeData from "./ShowHomeData/ShowHomeData";
// import { useEffect, useState } from "react";



const Home = () => {


    return (
        <div>

            <Bannerbg></Bannerbg>
            <SectionTwo></SectionTwo>
            <ShowHomeData></ShowHomeData>
            <CarouselCar></CarouselCar>
            <Footer></Footer>
        </div>
    );
};

export default Home;