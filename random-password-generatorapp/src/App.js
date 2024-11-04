import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {

  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [numbercase,setNumbercase]=useState(false)
  let [specailcase,setSpecailcase]=useState(false)
  let [passwordLen,setPasswordLen]=useState(10)
  let [fpass,setFinalpass]=useState('')

  let createPassword=()=>{
    let charSet=''
    let finalPass=''
   if(uppercase || lowercase ||  numbercase || specailcase ){
    if(uppercase) charSet+=UC;
    if(lowercase) charSet+=LC;
    if(numbercase) charSet+=NC;
    if(specailcase) charSet+=SC;
     for(let i=0;i<passwordLen;i++){
      finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
     }
     setFinalpass(finalPass)
   }else{
     alert("Please select atlist one CheckBox")
   }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }
  return (
    <>
    <div className='passwordBox'>
      <h3>Password Generator</h3>

      <div className='passwordBoxIn'> 
        <input type='text' value={fpass}readOnly/><button onClick={copyPass}>Copy</button>
      </div>
      <div className='passLength'>
        <label>Password Length</label>
        <input type='number' max={20} min={10}value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)}/>

      </div>
      <div className='passLength'>
        <label>Including Uppercase letter</label>
        <input type='checkbox'  checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>

      </div>
      <div className='passLength'>
        <label>Including LowerCase letter</label>
        <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>

      </div>
      <div className='passLength'>
        <label>Including Number </label>
        <input type='checkbox'  checked={numbercase} onChange={()=>setNumbercase(!numbercase)}/>

      </div>
      <div className='passLength'>
        <label>Including Special Charater</label>
        <input type='checkbox' checked={specailcase} onChange={()=>setSpecailcase(!specailcase)}/>

      </div>
      <button className='genPassBtn' onClick={createPassword}>  Generate Password</button>
    </div>
    </>
  );
}

export default App;
