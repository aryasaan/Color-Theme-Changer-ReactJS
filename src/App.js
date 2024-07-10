// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor]=useState("#000")

  return (
    <div className="w-full h-screen duration-200"  style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-1 px-2 rounded-3xl">
          <button  onClick={() =>{setColor("red")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"red"}}>Red
           </button>
           <button onClick={() =>{setColor("green")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"green"}}>Green
           </button>
           <button onClick={() =>{setColor("blue")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"blue"}}>Blue
           </button>
           <button onClick={() =>{setColor("orange")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"orange"}}>Yellow
           </button>
           <button onClick={() =>{setColor("#333333")}}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#333333"}}>Dark Gray
           </button>
           <button onClick={() =>{setColor("#964B00")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#964B00"}}>Lavender
           </button>
           <button onClick={() =>{setColor("#03055B")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#03055B"}}>Navy Blue
           </button>
           <button onClick={() =>{setColor("#1ABC9C")}}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#1ABC9C"}}>Turquoise
           </button>
           <button onClick={() =>{setColor("olive")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"olive"}}>Olive
           </button>
           <button onClick={() =>{setColor("#DC143C")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#DC143C"}}>Crimson
           </button>
           <button onClick={() =>{setColor("black")}} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"black"}}>Black
           </button>
          
        </div>
        
      </div>
     
    </div>

  );
}

export default App;
