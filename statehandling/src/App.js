import logo from './logo.svg';
import './App.css';
import btnModule from "./Button.module.css"
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { questions } from './faqQuestions';
import Faqs from './Faqs';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {
 let [showAns,setShowAns]=useState(questions[0].id)
  let [status, setStatus]=useState(false)
  let [pstauts,setPstatus]=useState(false)
  let [menuStatus,setMenuStatus]=useState(false)
  
  let[modelStatus, setModelStatus]=useState(false)
  let showNotification=()=>{
    // NotificationManager.info("Welcome")
    // NotificationManager.warning('Warning message', 'Enter name', 3000);
    // NotificationManager.success('Success message', 'Login SuccessFul');
    NotificationManager.error('Error message', 'Click me!')
  }
  return (
    <div className="App">
      <NotificationContainer/>
       
       <button onClick={showNotification}>
        Save
       </button>
      <div>
        
        <Faqs/>
        {/* <h1>Frequently asked questions (FAQ)</h1>
          <div className='faqouter'>
             
            {
            questions.map((fapItems,i)=>{
              return(
                <div className='faqItems'>
              <h2 onClick={()=>setShowAns(fapItems.id)}>{fapItems.question}</h2>
                <p className={showAns==fapItems.id ? 'activeAns' : ''}>{fapItems.answer}</p>
                </div>
              )
            })
            }
            
                </div>
         */}
        
        </div>
      <button className='en' onClick={()=>setModelStatus(true)}> Enquiry Now</button>
      <div  onClick={()=>setModelStatus(false)} className= {`modelOverlay  ${modelStatus?'modelShow':''}`}></div>
      <div className={`ModelDiv ${modelStatus?'showModelDiv':''}`}>
        <h3>Enquiry Now  <span className='closeModel'onClick={()=>setModelStatus(false)}>&times;</span> </h3>
      </div>
      <button className='micon' onClick={()=>setMenuStatus(!menuStatus)} >
        {
          menuStatus ? 
          <span>&times;</span>
          :
          <span>&#9776;</span>
        }
        
        
        </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : '' }`}>
        <ul>
          <li>Home</li>
          <li>Name</li>
          <li>Class</li>
          <li>Email</li>
          <li>Address</li>
          <li>Phone</li>
        </ul>
      </div>

      <input type={pstauts ? 'text' : 'password'}/> 
      <button onClick={()=>setPstatus(!pstauts)}>
        {pstauts ? 'Hide' : 'show'}
      </button>
      
      <br/>
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warrning}> Warrning</button>
      <button onClick={()=>setStatus(!status)}>
        {(status) ? 'Hide' : 'Show' }
      </button>
      {
      (status)
      ?
      <p className='para'>Welccome to home page</p>
      :
      ''
      }
      
    </div>
  );
}

export default App;
