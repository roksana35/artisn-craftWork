import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const {user,LogOut}=useContext(AuthContext);
  const [theme,setThemes]=useState('light')
  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme=localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])
  const handletheme=e=>{
    if(e.target.checked){
      setThemes('synthwave')
    }
    else{
      setThemes('light')
    }
  }
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
      {
        user&&<li><NavLink to='/addcraft' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>Add Craft item</NavLink></li>
      }
      
      {
      user&&<li><NavLink to='/myart' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>My Art & Craft list</NavLink></li>
      }
        
        
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl"><span className="text-green-600">Artisn</span> CraftWork</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>Home</NavLink></li>
      <li><NavLink to='/artandcraft' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>All Art & Craft Items </NavLink></li>
      {
        user&&<li><NavLink to='/addcraft' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>Add Craft item</NavLink></li>
      }
      {
      user&&<li><NavLink to='/myart' className={({isActive})=>isActive?'text-green-500 font-bold':'font-bold'}>My Art & Craft list</NavLink></li>
      }
      
      
    </ul>
  </div>
  <div className="navbar-end ">
  <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" onClick={handletheme} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    {
      user?<div className="dropdown dropdown-end flex items-center justify-center">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10  rounded-full ">
          <img className="flex items-center justify-center "  src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}>
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