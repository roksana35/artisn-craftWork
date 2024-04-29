import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Craftcard from "./Craftcard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const HomePage = () => {
    const {loading,setLoading}=useContext(AuthContext);
    const crafts=useLoaderData();
    // useEffect(()=>{
    //     if(crafts.length>0){
    //         setLoading(false);
    //     }
        
    // },[crafts])
    if(loading){
        return <span className="loading loading-spinner loading-lg text-center block items-center"></span>
    }
    
    

    // console.log(crafts)
    return (
        <div className="container mx-auto">
            
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