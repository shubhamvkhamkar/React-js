import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { tabs } from './tabs';

function App() {
  let [todolist,settoDOlist]=useState([])
  let [activeTab,setActiveTab]=useState(0)
  let [activeContent,setActiveContent]=useState(tabs[0])

  let changeData=(index)=>{
    setActiveTab(index)
    setActiveContent(tabs[index])
  } 
  let saveToDoList=(event)=>{

    
    let toname= event.target.toname.value;
    if(!todolist.includes(toname)){
       let finaltoDOList=[...todolist,toname] 
       settoDOlist(finaltoDOList);
    }else{
      alert("TO Do name Already Exists...")
    }    
    event.preventDefault();
  }
let list=todolist.map((value,index)=>{
  return(
    <ToDoListItem value={value} key={index} indexNumber={index} 
    todolist={todolist}
    settoDOlist={settoDOlist}
    />
  )
})
  return (
    <div className="App">
     <div className='tabOuter'>
     <h1 style={{textAlign:'left'}}>Tabing Example</h1>

     <ul>
      {tabs.map((tabsItems,index)=>{
        return(
        <li>
        <button  onClick={()=>changeData(index)} className={activeTab==index ? 'activeButton' : ''}>{tabsItems.title}</button>
        </li>
        )
      })}
      
     </ul>
      {activeContent!==undefined ? 
        <p>
            {activeContent.description}
        </p>
        :
        ''
        }
     </div>
      <h1>ToDO List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname'/> <button>Save</button>
      </form>
      <div className='outerDiv'>
      <ul>
          {list}
      </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({value,indexNumber,todolist,settoDOlist}){
 
  let [status,setStauts]=useState(false)
 let deleteRow=()=>{
  let finalData=todolist.filter((v,i)=>i!=indexNumber)
       settoDOlist(finalData)

 }
  let checkStatus=()=>{
       setStauts(!status)
  } 
  return(

    <li className={(status) ? 'completetodo': '' } onClick={checkStatus}> {indexNumber+1}  {  value}<span onClick={deleteRow}> &times;</span> </li>
  )
}
