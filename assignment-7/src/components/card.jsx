import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';



function Card({course,buttonHandle}) {
 
    
  const {courseName, intro, description, price, creditHours, photo}=course;

 

  const imageUrl =  `Asset/${photo}`


  return (
    <div>
 <div className="card w-80 bg-base-100 shadow-xl h-[450px]">
  <figure className="">
    <img src={imageUrl} alt="" className="rounded-xl w-[300px] p-2" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title text-left">{courseName}</h2>
    <p className="text-left">{description}</p>
    <div className="flex gap-10 py-2">
    <div className="flex gap-2 items-center">
        <img src="Asset/dollar.png" className="w-4 h-4"></img>
    <p >Price : {price}</p>
    </div>
    
    <div className="flex gap-2 items-center">
        <img src="Asset/book.png" className="w-4 h-4"></img>
    <p >credit : {creditHours}</p>
    </div>
    </div>
     
    <div className="mx-auto">
      <button className="btn btn-primary w-64" onClick={()=>buttonHandle(course)}>Select</button>
    </div>
  </div>
</div>


    </div>
    
  )
};

Card.propTypes={
     buttonHandle : PropTypes.func,
     course : PropTypes.object
}


export default Card

