import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const Allartandcraft = () => {
    const loadedCraft =useLoaderData();

    
    const [crafts,setCraft]=useState(loadedCraft);
    console.log(crafts)
    return (
        <div className="overflow-x-auto">
             <table className="table table-xs sm:table-sm md:table-md lg:table-lg" style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th></th> 
        <th >ItemName</th> 
        <th>SubCategoryName</th> 
        <th >UserEmail</th> 
        <th >StockStatus</th> 
        <th >Rating</th> 
        <th >Details</th>
      </tr>
    </thead> 
    <tbody style={{ flex: "1" }}>
    {
            crafts.map((craft,index)=><tr key={craft._id}>
            <th>{index+1}</th> 
            <td >{craft.itemname}</td> 
            <td >{craft.subname}</td> 
            <td >{craft.userEmail}</td> 
            <td >{craft.stockstatus}</td> 
            <td>{craft.rating}</td> 
            <td ><Link to={`/craft/${craft._id}`} ><button>View Details</button></Link></td>
          </tr>)
        }
    

    </tbody>
    

   
    
  </table> 
            
  
</div> 
    );
};

export default Allartandcraft;