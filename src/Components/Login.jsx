import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "./Navbar";
import Footer from "../Layout/Footer";

const Login = () => {
    const {loginUser,googleLogin}=useContext(AuthContext);
    const  [error,seterror]=useState('');

    const handleLogin=e=>{
        e.preventDefault();
        const form =e.target;
        const email=form.email.value;
        const password= form.password.value;
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
        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
        }).catch(error=>{
          console.error(error)
          seterror(error)
        })
        
    }
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            {/* login page form */}
            <div className="hero min-h-screen bg-base-200 space-y-2">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="lg:text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
     <div className="mx-auto">
     New here?Create a account <Link to='/register'><button className="text-blue-700 font-semibold">Register</button></Link>
     <div className=" p-2 lg:ml-7 mx-auto">
        <button onClick={()=>googleLogin()} className="btn btn-outline border-2 border-purple-800 mx-auto">Continue with Google</button>
     </div>
     <div className="p-2 lg:ml-7 mx-auto">
        <button className="btn btn-outline border-2 border-purple-800 mt-2">Continue with Github</button>
     </div>
     </div>
    </div>
  </div>
</div>
{/* footer section */}
<Footer></Footer>

        </div>
        
    );
};

export default Login;