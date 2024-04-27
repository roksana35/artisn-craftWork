import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";


const HomePage = () => {
    const crafts=useLoaderData();
    console.log(crafts)
    return (
        <div>
            <h1>this is home page</h1>
            <Banner></Banner>
            <div>
                <h2>crafts:{crafts.length}</h2>
            </div>
        </div>
    );
};

export default HomePage;

