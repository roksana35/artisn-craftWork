import { useState } from "react";


const Category = ({category}) => {
    console.log(category)
    const {image,subcategoryname,price,rating,_id}=category;
    
    

    
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl md:w-[300px] md:h-[250px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{subcategoryname}</h2>
          <p><span className="font-bold text-xl mr-2">Price:</span>{price}</p>
          <p><span className="font-bold text-xl mr-2">Rating:</span>{rating}</p>
          
        </div>
      </div>
    );
};

export default Category;