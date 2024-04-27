import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Layout/Footer";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Registerpage = () => {
    const {signUpUser,setUser,updateUser}=useContext(AuthContext);
    const [error,seterror]=useState('');
    const [registererror,setRegistererror]=useState('');
    const navigate=useNavigate();
    const form='/';
    const handleRegister=event=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const image=form.photo.value;
        console.log(name,email,password ,image)
        if(password.length<6){
            seterror('password should be   at least 6 characters')
            return
        }
        if(!/[A-Z]/.test(password)){
            seterror('Your password should be one uppercase')
            return;
        }
        if(!/[a-z]/.test(password)){
            seterror('your password should be one lowercase')
        }
        signUpUser(email,password)
       
        .then(result=>{
            console.log(result.user)
            // updateUser(name,image)
            // .then(()=>{
            //     navigate(form)
            // })
            setUser(result.user)
            toast.success("Successfully Register !", {
              position: "bottom-right",
            });
        })
        .catch(error=>{
          console.error(error)
          setRegistererror(error.message)
        })

    }
    return (
        <div>
            {/* <Navbar */}
            <Navbar></Navbar>
            {/* register section */}
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Paaword</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        {error&&<p className="text-red-700">{error}</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">ImgURL</span>
          </label>
          <input type="text"name="photo" placeholder="imgURL" className="input input-bordered"  />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Regiser</button>
        </div>
      </form>
      <div className="absolute bottom-8 right-8">
              <ToastContainer position="bottom-right" />
            </div>
      {
        registererror&&<p className="text-red-500 p-2">{registererror}</p>
      }
      <div className="mx-auto mb-5">
     Already have an account?plz login <Link to='/login'><button className="text-blue-700 font-semibold">login</button></Link>
      
    </div>
  </div>
</div>
</div>
{/* footer section */}
<Footer></Footer>

        </div>
        
    );
};

export default Registerpage;