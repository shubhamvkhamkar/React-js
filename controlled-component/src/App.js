import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [uName,setuName]=useState('')
  let [uPass,setUpass]=useState('')
  let handleSubmit=(event)=>{
   event.preventDefault();
   console.log(uName,uPass)
  }
  // let getUname=(event)=>{
  //   setuName(event.target.value)
  // }
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={handleSubmit}>
              <div className='text-start my-3'>
                <label>UserName</label>
                <input type='text' onChange={(event)=>setuName(event.target.value)} className='form-control'  value={uName}/>
              </div>
              <div className='text-start my-3'>
                <label>Password</label>
                <input type='text'onChange={(event)=>setUpass(event.target.value)} className='form-control' value={uPass}/>
              </div>
              <div  className='text-start my-3'>
            
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
