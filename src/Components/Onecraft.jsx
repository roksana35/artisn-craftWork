import { Link } from "react-router-dom";

const Onecraft = ({craft,index}) => {
    console.log(craft,index)
    return (
        <div className="overflow-x-auto">
  <table className="table table-xs">
    {/* <thead>
      <tr>
        <th></th> 
        <th>ItemName</th> 
        <th>SubCategoryName</th> 
        <th>UserName</th> 
        <th>StockStatus</th> 
        <th>Rating</th> 
        <th>Favorite Color</th>
      </tr>
    </thead>  */}
    <tbody>
       
           <tr >
                <th>{index+1}</th> 
                <td>{craft.itemname}</td> 
                <td>{craft.subname}</td> 
                <td>{craft.name}</td> 
                <td>{craft.stockstatus}</td> 
                <td>{craft.rating}</td> 
                <td><Link to><button>View Details</button></Link></td>
              </tr>
    
      
    </tbody> 
    
  </table>
</div>
    );
};

export default Onecraft;