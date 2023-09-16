import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card'
import Cart from './components/cart'
import Test from './components/test';


function App() {

  

  const[allCourse,setAllCourse]= useState([]);

    useEffect(()=>{
      fetch('data.json')
      .then(response => response.json())
      .then(json => setAllCourse(json))       
     },[]);
     const courseArray =allCourse.courses;

     const [selectedPrice, setSelectedPrice] = useState([]);
     const [selectedCredit,setSelectedCredit] = useState([]);
     const [selectedCourse, setSelectedCourse] = useState([]); 

    const buttonHandle = (price,credit,course)=>{

    setSelectedPrice([...selectedPrice, price]);
    setSelectedCredit([...selectedCredit, credit]);
    setSelectedCourse([...selectedCourse, course]);
    
    

   }
  
   console.log(selectedPrice)
   console.log(selectedCredit);
   console.log(selectedCourse);
   

    
  
    

  return (
    <>
    <div className='max-w-lg md:max-w-2xl lg:max-w-screen-2xl mx-auto p-3'>
      
    <h1 className="text-center mt-12 mb-10 text-2xl font-bold ">Course Registration</h1>
    <div className="flex gap-10">
      <div className="w-3/4 flex gap-8 flex-wrap">
       {
        courseArray?.map((course, idx)=> (<Card key={idx} course={course} buttonHandle={buttonHandle}></Card>))
       }
      </div>
    
     <Cart></Cart>
     <Test></Test>
   
    </div>
   
    </div>

    </>
  )
}

export default App
