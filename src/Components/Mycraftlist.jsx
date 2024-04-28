import { Link } from "react-router-dom";


const Mycraftlist = ({item}) => {
    const {_id,itemname,subname,userEmail,userName,cutomization,time,price,rating,stockstatus,image,description}=item;
    return (
        <div>
            
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} className="md:w-[500px] md:h-[350px] rounded-lg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{itemname}</h2>
    
    <p><span className="font-semibold mr-2">Price:</span>{price}</p>
    <p><span className="font-semibold mr-2">Rating:</span>{rating}</p>
    <p><span className="font-semibold mr-2">Customization:</span>{cutomization}</p>
    <p><span className="font-semibold mr-2">StockStatus:</span>{stockstatus}</p>
   
    
    <div className=" flex flex-row ">
        <div className="">
            <Link><button className="btn btn-secondary mr-5">Update</button></Link>
            <button className="btn btn-primary">Delete</button>

        </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Mycraftlist;