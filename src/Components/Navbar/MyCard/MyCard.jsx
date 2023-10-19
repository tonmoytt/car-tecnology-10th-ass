import { useLoaderData } from "react-router-dom";
import CardDataShow from "./CardDataShow";



const MyCard = () => {
    const dataload = useLoaderData()
    console.log(dataload);
    return (
        <div>
            <h1 className="text-2xl font-semibold font-serif text-center mt-8 bg-white mx-10 p-4">YOUR ALL ADDED PRODUCT HERE</h1>

            <div>
                {
                    dataload.map(data => <CardDataShow key={data._id} PropsCarddata={data}></CardDataShow>)
                }
            </div>
        </div>
    );
};

export default MyCard;