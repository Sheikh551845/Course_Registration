import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
  


function Cart({selectedCourse}) {



let tPrice=0;
let tHour=0;
let rHour=20;

selectedCourse.forEach(element => {
  tPrice=tPrice+element.price;
  tHour=tHour+element.creditHours;
  rHour=rHour-element.creditHours;
});




  

  return (
    <div>
      
  <div className="card w-[350px] bg-base-100 shadow-xl">
    
  
  <div className="card-body">
    <h2 className="card-title text-left text-[#2F80ED]">Credit Hour Remaining {rHour} hr</h2>
    <hr style={{ color: 'black', width: '90%' ,margin:'auto'}}></hr>
   
    <p className="text-left font-bold">Course Name:</p>
    {
        selectedCourse?.map((course, idx)=> (
        
        <li key={idx}>{course.courseName}</li>
    ))}
   
    <hr style={{ color: 'black', width: '90%' ,margin:'auto'}}></hr>
    <p className='text-left py-2'>Total Credit Hour: </p>
    <hr style={{ color: 'black', width: '90%' ,margin:'auto'}}></hr>
    <p className='text-left'>Total Credit Price: {tPrice} USD </p>
  </div>
</div>
    </div>
    
  )
}



export default Cart
