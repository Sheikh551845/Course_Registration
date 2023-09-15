import React,{useEffect, useState} from 'react';


function Card() {

    useEffect(()=>{
        fetch(".\data.json")
        .then((res)=>res.json)
        .then((data)=>console.log(data));
     },[]);

  return (
    <div>
 <div className="card w-80 bg-base-100 shadow-xl">
  <figure className="">
    <img src="Asset/ai_essentials.png" alt="" className="rounded-xl w-[300px] p-2" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title text-left">Introduction</h2>
    <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam quibusdam quod odio, obcaecati perspiciatis porro officiis deleniti eveniet minima nam, commodi quo aspernatur sunt omnis illo. Accusantium, necessitatibus quod?</p>
    <div className="flex gap-10">
    <div className="flex gap-2 items-center">
        <img src="Asset/dollar.png" className="w-4 h-4"></img>
    <p >Price : <span>15000</span></p>
    </div>
    
    <div className="flex gap-2 items-center">
        <img src="Asset/book.png" className="w-4 h-4"></img>
    <p >credit : <span>2</span></p>
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

