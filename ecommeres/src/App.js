import logo from './logo.svg';
import './App.css';
import Category from './Category';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  let [finalCategory,setFinalCategory]=useState([])
  let [finalPro,setFinalPro]=useState([])
  let [catName,setCatName]=useState('')

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((res)=>res.data)
    .then((finalRes)=>{
       setFinalCategory(finalRes)
    })
  }

  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
       setFinalPro(finalRes.products)
    })
  }
  useEffect(()=>{
    getCategory();
    getProduct();
  },[])

  useEffect(()=>{
    if(catName!==""){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes)=>proRes.data)
      .then((finalRes)=>{
         setFinalPro(finalRes.products)
      })
      
    }
   
  },[catName])
  let pitems=finalPro.map((product,index)=>{
    return(
      <ProductItem key={index} pdata={product}/>
    )
  })
  return (
    <>
    <div className='py-[40px]'>
      <div className='max-w-[1320px] mx-auto'>
         <h1 className='text-center text-[40px] font-bold mb-[30px]'> Our Products</h1>
         <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div >

            <Category finalCategory={finalCategory} setCatName={setCatName}/>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-5' >
              { finalPro.length>=1 ?
             pitems
             :
             "No Product Found"
              }
            </div>
          </div>
         </div>
      </div> 
    </div>
    
    </>
  );
}

export default App;

function ProductItem({pdata}){

  return(
    <div className='shadow-lg text-center pb-4' >
        <img className='p-[5px] w-[100%] h-[220px]'
                src={pdata.images} />
                <h4>{pdata.title}</h4>
                <b>RS. {pdata.price}</b>
              </div>
  )
}