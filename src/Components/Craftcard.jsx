import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Craftcard = ({craft}) => {
    // console.log(craft)
    const {_id,itemname,subname,userEmail,userName,cutomization,time,price,rating,stockstatus,image,description}=craft;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl md:w-[500px] md:h-[350px]" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title text-2xl font-bold">{itemname}</h2>
    <p className="text-xl font-semibold">{subname}</p>
    <div className="">
        <p><span className=" font-semibold mr-2">Email:</span>{userEmail}</p>
        <p><span className="font-semibold mr-2">Name:</span>{userName}</p>
    </div>
    <div className="">
        <p><span className=" font-semibold mr-2">Customization:</span> {cutomization}</p>
        <p><span className=" font-semibold mr-2">StockStatus:</span>{stockstatus} </p>
    </div>
    <div className="flex gap-10">
        <p><span className=" font-semibold mr-2">Price:</span>{price}</p>
        <p><span className=" font-semibold mr-2">Time:</span>{time}</p>
        <p className="flex items-center justify-center "><span className=" font-semibold mr-2">Rating:</span>     <FaRegStar />{rating}</p>
    </div>
    
    <div>
        <p><span className="font-semibold mr-2">Description:</span>{description.slice(0,210)}</p>
    
    
    </div>

    <div className="card-actions ">
        <Link to={`/craft/${_id}`}> 
        <button className="btn btn-primary w-full">View Details</button>

        </Link>
      
    </div>
  </div>
</div>
    );
};

export default Craftcard;