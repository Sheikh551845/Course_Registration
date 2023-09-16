import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Cart({selectedCourse}) {

 const price1 = selectedCourse[0].price;
  console.log(price1);
// let totalPrice=0;

// totalPrice=totalPrice+ selectedCourse[0].price;
    
// console.log(totalPrice);
  

  return (
    <div>
  <div className="card w-[330px] bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title text-left text-[#2F80ED]">Credit Hour Remaining 7 hr</h2>
    <hr style={{ color: 'black', width: '90%' ,margin:'auto'}}></hr>
   
    <p className="text-left font-bold">Course Name:</p>
    {
        selectedCourse?.map((course, idx)=> (
        
        <li key={idx}>{course.courseName}</li>
    ))}
   
    <hr style={{ color: 'black', width: '90%' ,margin:'auto'}}></hr>
    <p className='text-left'>Total Credit Hour: </p>
    <hr style={{ color: 'black', width: '90%' ,margin:'auto'}}></hr>
    <p className='text-left'>Total Credit Price: </p>
  </div>
</div>
    </div>
    
  )
}



export default Cart
