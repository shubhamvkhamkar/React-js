import logo from './logo.svg';
import './App.css';
import kingLogo from "./Image/king.jpg"
import Header from './Header';
import { useState } from 'react';

function App() {
  let template ='';
  let [count, setCount] = useState(0)
  let [pshow, setPshow] = useState(false)

  if(pshow){
     template=<>
     <button className='bg-[yellow] p-4' onClick={()=>setPshow(!pshow)}> Hide</button>
     <p>welcome to Main page</p>
     </>
  }else{
    template=<button className='bg-[red] p-4' onClick={()=>setPshow(!pshow)}>Show</button>
  }
let displayData=()=>{
 setCount(count+1)
}
let addData=(a,b)=>{
  console.log(a+b)
}

  return (
    <div className="App">
      {template}
      <div>
      {count}
      </div>
    
      <button className='bg-[red] p-[10px] mr-4' onClick={()=> addData(10,20)}>Add data</button>
      <button className='bg-[red] p-[10px]' onClick={displayData}>Save</button>
      <img width={200} src={kingLogo}/>
      <Header/>
      <h1 className='text-[50px] text-red-800 font-bold'>Welcome to Home Page</h1>
    </div>
  );
}

export default App;
