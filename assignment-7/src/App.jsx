import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [value, setValue] = useState(0);

 

  return (
    <>
    <div className='max-w-lg md:max-w-2xl lg:max-w-screen-2xl mx-auto p-3'>
    <h1 className="text-center mt-12 text-2xl font-bold mb-3">Course Registration</h1>
    
     <Card></Card>
    </div>
     
    </>
  )
}

export default App
