import React, { useState } from 'react';

function Test() {
  const [selectedPrice, setSelectedPrice] = useState([]);

  const addPrice = (newPrice) => {
    console.log(typeof(newPrice));
    
    setSelectedPrice([...selectedPrice, newPrice]);
    console.log(typeof(selectedPrice));
    console.log(selectedPrice);
   
  };
  

  return (
    <div>
      <button onClick={() => addPrice(10)}>Add $10</button>
      <button onClick={() => addPrice(20)}>Add $20</button>
      <button onClick={() => addPrice(30)}>Add $30</button>
    </div>
  );
}

export default Test;
