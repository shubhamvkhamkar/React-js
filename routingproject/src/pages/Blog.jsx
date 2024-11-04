import React from 'react'
import Header from '../comman/Header'
import { blogs } from '../Data/blogs'
import { Link } from 'react-router-dom'

export default function Blog() {
    let allblogs= blogs.map((v,i)=>{
        return(
            <div className='blogItems' key={i}>
                <p>
                    <h3>{v.title}</h3>
                    {v.body}
                    
                </p>
                <button> <Link to={`/blog/${v.id}`}> Read more</Link> </button>
            </div>
        )
    })
  return (
    <>

        <Header/>

        <h1>Blog page</h1>
        <div className='container'>
            
            {allblogs}
            </div>
              </>
  )
}
