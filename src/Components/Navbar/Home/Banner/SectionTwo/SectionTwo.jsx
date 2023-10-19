import logo from './../../../../../assets/img/car img/14.support logo.jpg'
import payment from './../../../../../assets/img/car img/15.paymeny.png'
import gift from './../../../../../assets/img/car img/Gift.png'
import shipping from './../../../../../assets/img/car img/shipping.jpg'

const SectionTwo = () => {
    return (
        <div className='border grid md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 bg-red-300'>
            <div className="flex items-center border-r-4">
                <div className=' rounded-full bg-slate-300 mr-3'>
                    <img className='h-14 w-14 border rounded-full ' src={logo} alt="" />
                </div>
                <div className='mr-6'>
                    <p className="text-lg font-semibold">24/7 Free Support</p>
                    <p>we are provide online support</p>
                </div>

            </div>
            {/* second section */}
            <div className="flex items-center border-r-4 ">
                <div className=''>
                    <img className='h-14 w-14 border rounded-full mr-3' src={payment} alt="" />
                </div>
                <div className='mr-6'>
                    <p className="text-lg font-semibold">Money Back Guarantee</p>
                    <p>100% secure payment</p>
                </div>
            </div>
            {/* third section */}
            <div className="flex items-center border-r-4 ">
                <div className=''>
                    <img className='h-12 w-12 border rounded-full mr-3' src={gift} alt="" />
                </div>
                <div className='mr-6'>
                    <p className="text-lg font-semibold">Special gift card</p>
                    <p>Purchase at least 5 Product</p>
                </div>
            </div>
  {/* four section */}
            <div className="flex items-center border-r-4 ">
                <div className=''>
                    <img className='h-14 w-14 border rounded-full mr-3' src={shipping} alt="" />
                </div>
                <div className='mr-6'>
                    <p className="text-lg font-semibold">Worldwide Shipping</p>
                    <p>On over upto $200</p>
                </div>

            </div>




        </div>
    );
};

export default SectionTwo;