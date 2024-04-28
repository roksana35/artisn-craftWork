import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Craftcard from "./Craftcard";


const HomePage = () => {
    const crafts=useLoaderData();
    // console.log(crafts)
    return (
        <div>
            
            <Banner></Banner>
            <h2 className="text-center font-bold text-xl text-black md:text-2xl mt-4">Crafts Information:{crafts.length}</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    crafts.map(craft=><Craftcard key={craft._id} craft={craft}></Craftcard>)
                }

            </div>
        </div>
    );
};

export default HomePage;

