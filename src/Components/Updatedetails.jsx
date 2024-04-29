import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'


const Updatedetails = () => {
    const {id}=useParams();
    console.log(id)
    const [update,setUpdate]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/update/${id}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setUpdate(data)
        })
    },[]);
    const handleUpdate=event=>{
        event.preventDefault();
        const form=event.target;
        const itemname=form.itemname.value;
        const subname=form.subname.value;
        // const email=form.email.value;
        // const name =form.name.value;
        const cutomization=form.customization.value;
        const time=form.time.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const stockstatus=form.stock.value;
        const image=form.image.value;
        const updateInfo={itemname,subname,cutomization,time,price,rating,stockstatus,image,}
        console.log(updateInfo);
        fetch(`http://localhost:5000/update/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateInfo)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data?.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Update Craft Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
        
    }

    return (
        <div className="bg-[#F4F3F0] P-24">
            <h1 className="text-2xl font-bold md:pt-8 md:ml-6 ">Update craft item</h1>
            <form onSubmit={handleUpdate} className="p-8">
                {/* item name and subcategory name */}
                <div className="md:flex mb-2 gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " defaultValue={update.itemname} type="text" name="itemname" required placeholder="enter itemname"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Subcategory Name</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="subname" defaultValue={update.subname} required placeholder="enter subcategoryname"  />
                        </label>
                    </div>
                </div>
                {/* user name and email */}
                {/* <div className="md:flex mb-2 gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="email" name="email" required placeholder="Enter email"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="name" required placeholder="Enter your name"  />
                        </label>
                    </div>
                </div> */}
                {/* customization &  processing_time */}
                <div className="md:flex mb-2 gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">customization</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="customization" defaultValue={update.cutomization} required placeholder="Yes/No"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Processing_Time</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="time" defaultValue={update.time} required placeholder="enter processingtime"  />
                        </label>
                    </div>
                </div>
                

                {/* price rating stuckstatus */}
                 
                <div className="md:flex mb-2 gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="price" defaultValue={update.price} required placeholder="Price"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Rating</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="rating" defaultValue={update.rating} required placeholder="rating out of 10"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">stockStatus</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="stock" defaultValue={update.stockstatus}  required placeholder=" In stock/Made to Order"  />
                        </label>
                    </div>
                </div>
                

                {/* imgurl */}
                <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">ImgURL</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="image" defaultValue={update.image} required placeholder="imageURL"  />
                        </label>
                    </div>
                
                    <div>
                        <button className="btn btn-primary w-full">Update  Craft</button>
                    </div>


            </form>
        </div>
    );
};

export default Updatedetails;