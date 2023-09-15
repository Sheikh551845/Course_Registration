import React,{useEffect, useState} from 'react';


function Card(props) {
    
  const {courseName, intro, description, price, creditHours}=props.course;
  console.log(courseName);
  

  return (
    <div>
 <div className="card w-80 bg-base-100 shadow-xl">
  <figure className="">
    <img src="Asset/ai_essentials.png" alt="" className="rounded-xl w-[300px] p-2" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title text-left">{courseName}</h2>
    <p className="text-left">{description}</p>
    <div className="flex gap-10">
    <div className="flex gap-2 items-center">
        <img src="Asset/dollar.png" className="w-4 h-4"></img>
    <p >Price : {price}</p>
    </div>
    
    <div className="flex gap-2 items-center">
        <img src="Asset/book.png" className="w-4 h-4"></img>
    <p >credit : {creditHours}</p>
    </div>
    </div>
   

  
    <div className="card-actions mx-auto">
      <button className="btn btn-primary w-64">Select</button>
    </div>
  </div>
</div>

    </div>
    
  )
}

export default Card

