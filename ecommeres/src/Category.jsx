import React from 'react'

export default function Category({finalCategory, setCatName}) {
  let cat=finalCategory.map((v,i)=>{
    return(
      
      <li  onClick={()=>setCatName(v)} key={i} className='text-[20px] p-[7px] bg-[#ccc] cursor-pointer font-serif font-[500x] mb-2'> {v} 
      </li>
      
  
    )
  })
  return (
    <div>
        <h3 className='text-[25px] font-[500px] p-[10px]'>Product Category</h3>
         <ul>
          {cat}
         </ul>
    </div>
  )
}
