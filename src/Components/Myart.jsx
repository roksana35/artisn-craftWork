import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Mycraftlist from './Mycraftlist';

const Myart = () => {

    const {user}=useContext(AuthContext);
    
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myArtlist/${user?.email}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setItems(data)
        })

    },[user])
    
    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10'>
            {
                items.map(item=><Mycraftlist key={item._id} item={item}></Mycraftlist>)
            }

            </div>
            
        </div>
    );
};

export default Myart;