import swal from "sweetalert";
import Footer from "../Home/Footer/Footer";


const Addproduct = () => {
    const hendelbtn=event =>{
         event.preventDefault()
         const form=event.target;
         const image=form.image.value
         const name=form.name.value
         const brandnm=form.brandnm.value
         const category=form.category.value
         const Price=form.Price.value
         const Description=form.Description.value
         const rating=form.rating.value
         const user={image,name,brandnm,category,Price,Description,rating}
         console.log(user);

         fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.insertedId) {
                alert('successfull')
                // swal("Congratulation", "Successfully added", "success");
            }
         })
    }

    return (
        <div className="mt-10">

            <h1 className="text-2xl font-sans font-semibold text-center mb-10">ADD YOUR PRODUCT</h1>
            <div>
                <form onSubmit={hendelbtn}>
                    <div className="flex px-10 mb-10 gap-6">

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-serif font-semibold underline">Car Image</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>Image</span>
                                <input type="text" name="image" placeholder="URL" className="input input-bordered" />
                            </label>
                        </div>
                        {/* secend */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-serif font-semibold underline">Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>Name</span>
                                <input type="text" name="name" placeholder="Car name" className="input input-bordered" />
                            </label>
                        </div>
                    </div>

                    {/* second section */}
                    <div className="flex px-10 mb-10 gap-6">

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-serif font-semibold underline">Brand Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>Brand</span>
                                <input type="text" name="brandnm" placeholder="Brand Name" className="input input-bordered" />
                            </label>
                        </div>
                        {/* secend */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-serif font-semibold underline">Your category</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>category</span>
                                <input type="text" name="category" placeholder="Category" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* third section */}
                    <div className="flex px-10 mb-10 gap-6">

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-serif font-semibold underline">Price</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>Price</span>
                                <input type="text" name="Price" placeholder="Price" className="input input-bordered" />
                            </label>
                        </div>
                        {/* secend */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-serif font-semibold underline">Short description </span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>Description</span>
                                <input type="text" name="Description" placeholder="description" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* Four */}

                    <div className="form-control px-10 mb-10 w-full">
                        <label className="label">
                            <span className="label-text text-2xl font-serif font-semibold underline">Rating</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Rating</span>
                            <input type="text" name="rating" placeholder="Give Your Rating" className="input input-bordered" />
                        </label>

                    </div>
                    <div className="px-10">
                        <input className=" btn w-full mt-4 btn-error" type="submit" value="Submit" />
                    </div>
                    <div className="mt-10 pt-10 bg-indigo-400">
                        <Footer></Footer>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Addproduct;