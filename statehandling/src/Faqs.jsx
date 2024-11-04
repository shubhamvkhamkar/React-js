import React, { useState } from 'react'
import { questions } from './faqQuestions';

export default function Faqs() {

let [currentId,setCurrentId]=useState(questions[0].id)

let items=questions.map((itemsData,i)=>{

    let itemDetails={
        itemsData,
        currentId,
        setCurrentId
    }
    return(
        <FaqItems itemDetails={itemDetails} key={i}/>
    )
})
  return (
    <div>
        <h1>Frequently asked questions (FAQ)</h1>
        <div className='faqouter'>
           {items}
           
         </div>
    </div>
  )
}

function FaqItems({itemDetails}){

    let{ itemsData,currentId,setCurrentId }=itemDetails;
    
    return(
        <div className='faqItems'key={itemDetails.id} >
              <h2 onClick={()=>setCurrentId(itemsData.id)}>{itemsData.question}</h2>
                <p className={currentId===itemsData.id ? 'activeAns' : ''}>
                {itemsData.answer}</p>
           </div>
    )
}