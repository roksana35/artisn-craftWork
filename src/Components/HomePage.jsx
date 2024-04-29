import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Craftcard from "./Craftcard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Category from "./Category";


const HomePage = () => {
    
    const {loading,setLoading}=useContext(AuthContext);
    const crafts=useLoaderData();
    const [categorys,setCategorys]=useState([])
    // useEffect(()=>{
    //     if(crafts.length>0){
    //         setLoading(false);
    //     }
        
    // },[crafts])
    if(loading){
        return <span className="loading loading-spinner loading-lg text-center block items-center"></span>
    }
   
        fetch("http://localhost:5000/category")
    .then(res => res.json())
    .then(data=>{
        // console.log(data)
        setCategorys(data.slice(0,6))
    })

    
    

    // console.log(crafts)
    return (
        <div className="container mx-auto">
            
            <Banner></Banner>
            <h2 className="text-center font-bold text-xl  md:text-2xl mt-4">Crafts Information:{crafts.length}</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    crafts.map(craft=><Craftcard key={craft._id} craft={craft}></Craftcard>)
                }

            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
            {
                categorys.map(category=><Category key={category._id} category={category}></Category>)

            }
            </div>
        </div>
    );
};

export default HomePage;