import React from 'react'

const Reviews = (props) => {
  return (
    <div className='ml-16 mt-6'>
    <div className='bg-gray-200 h-28 w-96'> 
      <h2 className='ml-12 font-bold pt-4 pb-2 pl-2 pr-2 border-b border-black block'>{props.name}</h2>
      <p className='ml-12'>{props.descp}</p>
    </div>
  </div>
  
  
  

  )
}

export default Reviews
