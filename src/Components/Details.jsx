
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from '../Layout/Footer';

const Details = () => {
    const data=useLoaderData();

    const { id } = useParams();
    const craft=data.find(item=>item._id === id)
    console.log(craft)
    
    

    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='md:w-[900px] mx-auto'>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={craft.image} alt="Shoes" className="rounded-xl md:w-[500px] md:h-[350px]" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title text-2xl font-extrabold">{craft.itemname}</h2>
    <p className="text-xl font-bold">{craft.subname}</p>
    <div className="">
        <p><span className="text-black font-semibold mr-2">Email:</span>{craft.email}</p>
        <p><span className="text-black font-semibold mr-2">Name:</span>{craft.name}</p>
    </div>
    <div className="">
        <p><span className="text-black font-semibold mr-2">Customization:</span> {craft.cutomization}</p>
        <p><span className="text-black font-semibold mr-2">StockStatus:</span>{craft.stockstatus} </p>
    </div>
    <div className="flex gap-10">
        <p><span className="text-black font-semibold mr-2">Price:</span>{craft.price}</p>
        <p><span className="text-black font-semibold mr-2">Time:</span>{craft.time}</p>
        <p className="flex items-center justify-center "><span className="text-black font-semibold mr-2">Rating:</span>     <FaRegStar />{craft.rating}</p>
    </div>
    
    <div>
        <p><span className="text-black font-semibold mr-2">Description:</span>{craft.description}</p>
    
    
    </div>

    <div className="card-actions ">
        <Link to='/'> 
        <button className="btn btn-primary w-full">Go Back</button>

        </Link>
      
    </div>
  </div>
</div>

            </div>
            

        <Footer></Footer>
        </div>
        
    );
};

export default Details;
