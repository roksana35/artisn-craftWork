import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Mycraftlist = ({item,items,setItems}) => {
    const {_id,itemname,subname,userEmail,userName,cutomization,time,price,rating,stockstatus,image,description}=item;
    const [control,setControl]=useState(false);
    // const [filtervalue,setFiltervalue]=useState('')

    // const filteritems=items.filter(i=>!filtervalue || i.cutomization ===filtervalue)

    const HandleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   
            fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data?.deletedCount>0){
                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                setControl(!control)
                const remaning=items.filter(i=>i._id !==id)
                setItems(remaning)
            }
        })
            }
          });
        
            



    }
    return (
        <div>
             {/* <div>
            <div className="mb-4">
                <label htmlFor="customization" className="mr-2"></label>
                <select id="customization" className="select select-bordered" value={filtervalue} onChange={(e)=>setFiltervalue(e.target.value)}>
                    
                    <option value="all">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            </div>  */}
            
            
                <div key={_id} className="card  bg-base-100 shadow-xl">
                <figure><img src={image} className="md:w-[500px] md:h-[350px] rounded-lg" alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{itemname}</h2>
                  
                  <p><span className="font-semibold mr-2">Price:</span>{price}</p>
                  <p><span className="font-semibold mr-2">Rating:</span>{rating}</p>
                  <p><span className="font-semibold mr-2">Customization:</span>{cutomization}</p>
                  <p><span className="font-semibold mr-2">StockStatus:</span>{stockstatus}</p>
                 
                  
                  <div className=" flex flex-row ">
                      <div className="">
                          <Link to={`/update/${_id}`}><button className="btn btn-secondary mr-5">Update</button></Link>
                          <button onClick={()=>HandleDelete(_id)} className="btn btn-primary">Delete</button>
              
                      </div>
                    
                  </div>
                </div>
              </div>
            
            
            
        </div>
    );
};

export default Mycraftlist;


