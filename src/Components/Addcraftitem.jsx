import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';

const Addcraftitem = () => {
    const {user}=useContext(AuthContext);
    const [selectedSubcate, setSelectedSubcate] = useState('');

    const options=[
        {value: "Landscape Painting",label: "Landscape Painting"},
        {value: "Portrait Drawing",label:" Portrait Drawing"},
        {value:" Watercolour Painting",label:" Watercolour Painting"},
        {value:"Oil Painting",label:"Oil Painting"},
        {value:"Charcoal Sketching",label:"Charcoal Sketching"},
        {value:"Cartoon Drawing",label:"Cartoon Drawing"}
    ]
    const handleSubcategoryChange = (event) => {
        setSelectedSubcate(event.target.value);
    };
    // console.log(user)
    const handleAddCraft=event=>{
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
        const description=form.description.value;
        const userEmail=user.email;
        const userName=user.displayName;
        console.log(userEmail,userName);
        const addCraft={itemname,subname,userEmail,userName,cutomization,time,price,rating,stockstatus,image,description}
        console.log(itemname,subname,userEmail,userName,cutomization,time,price,rating,stockstatus,image)
        fetch("http://localhost:5000/addcraft",{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addCraft)

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Craft Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className=" P-24">
            <h1 className="text-2xl font-bold md:pt-8 md:ml-6 text-center">Add craft item</h1>
            <form onSubmit={handleAddCraft} className="p-8">
                {/* item name and subcategory name */}
                <div className="md:flex mb-2 gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="itemname" required placeholder="enter itemname"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label  className="label">
                            <span className="label-text"> Subcategory Name</span>
                        </label>
                        <select className="select select-bordered w-full" value={selectedSubcate} name='subname' onChange={handleSubcategoryChange} required>
                            <option value="" disabled>Select a subcategory</option>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        
                        {/* <label  className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="subname" required placeholder="enter subcategoryname"  /> 
                         </label>  */}
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
                            <input className="input input-bordered w-full " type="text" name="customization" required placeholder="Yes/No"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Processing_Time</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="time" required placeholder="enter processingtime"  />
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
                            <input className="input input-bordered w-full " type="text" name="price" required placeholder="Price"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Rating</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="rating" required placeholder="rating out of 10"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">stockStatus</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="stock"  required placeholder=" In stock/Made to Order"  />
                        </label>
                    </div>
                </div>
                

                {/* imgurl */}
                <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">ImgURL</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="image" required placeholder="imageURL"  />
                        </label>
                    </div>
                <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="description" required placeholder="Description"  />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary w-full">Add Craft</button>
                    </div>


            </form>
        </div>
    );
};

export default Addcraftitem;