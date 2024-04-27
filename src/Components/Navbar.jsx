import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const {user,LogOut}=useContext(AuthContext);
  const handleLogout=()=>{
    LogOut();
  }
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10 h-[76px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to='/' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>Home</NavLink></li>
      <li><NavLink to='/artandcraft' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>All Art & Craft Items </NavLink></li>
      <li><NavLink to='/addcraft' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>Add Craft item</NavLink></li>
      <li><NavLink to='/myart' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>My Art & Craft list</NavLink></li>
        
        
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl"><span className="text-green-600">Artisn</span> CraftWork</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>Home</NavLink></li>
      <li><NavLink to='/artandcraft' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>All Art & Craft Items </NavLink></li>
      <li><NavLink to='/addcraft' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>Add Craft item</NavLink></li>
      <li><NavLink to='/myart' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>My Art & Craft list</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end ">
    {
      user?<div className="dropdown dropdown-end flex items-center justify-center">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10  rounded-full ">
          <img className="flex items-center justify-center "  src={user?.photoURL || "https://i.ibb.co/mFj3TNM/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"}>
          </img>
          
        </div>


      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-24 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <button className="btn btn-sm btn-ghost">{user?.displayName || 'user name not found'}</button>
      </li>
      <button onClick={handleLogout} className="btn bg-green-500 text-white">LogOut</button> 

      </ul>
      
    
    
    </div>: <div>
        <Link to='/login' className="lg:mr-3 btn bg-green-500">Login</Link>
      <Link to='/register' className=" btn bg-green-500">Register</Link>
      </div>
    }
    
  </div>
</div>
    );
};

export default Navbar;