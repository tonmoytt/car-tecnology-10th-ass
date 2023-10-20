import car1 from './../../../../assets/img/car img/1.Toyota Camry.jpg'
import car2 from './../../../../assets/img/car img/7.Chevrolet Silverado.jpg'
import car3 from './../../../../assets/img/car img/10.Lexus RX.jpg'
import car4 from './../../../../assets/img/car img/3.BMW 3 Series.jpg'
import car5 from './../../../../assets/img/car img/9.Audi A4.jpg'
import car6 from './../../../../assets/img/car img/4.Mercedes-Benz E-Class.jpg'

const CarouselCar = () => {
    return (
        <div className="p-6 mt-8 bg-fuchsia-100">
            <p className="text-3xl font-semibold mb-3 text-center">Carousel car's </p>

            <div className="bg-slate-100">
                <div className="carousel w-full max-h-[600px]">
                    <div id="item1" className="carousel-item w-full">
                        <img src={car1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={car2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={car3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={car4} className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={car5} className="w-full" />
                    </div>
                    <div id="item6" className="carousel-item w-full">
                        <img src={car6} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                    <a href="#item6" className="btn btn-xs">6</a>
                </div>
            </div>
        </div>
    );
};

export default CarouselCar;