import './App.css';
import React,{useState,useEffect} from 'react'

function App() {
  let [data,setdata]=useState(0);
  useEffect(() => {
    document.title = `You clicked ${data} times`;
  });
  return (  
   <>        
   <div className="App">
   <h1>{data}</h1>
   <span clsssName="controler">
   <button onClick={()=>{setdata(data+1)}}>increase</button>
   <button onClick={()=>{setdata(0)}}>Reset</button>
   <button onClick={()=>{setdata(data-1)}}>decrease</button>
 
   </span>
   </div>
   </>
  );
}

export default App;
