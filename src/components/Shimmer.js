import React from 'react'
// import ResturantCard from './ResturantCard'

export default function Shimmer() {
  return (
    <div className='resturant-list '>
  
      {Array(10).fill("").map((e,index)=>   (<div key={index} className='shimmer-card'></div>))}
      
    </div>
  )
}
