import React from 'react'

const Card = (props) => {
  return (
    <div className='pl-6 h-auto'>
    <div className='h-96 max-h-96 w-80 bg-slate-600 mt-5 ml-10'>
      <img
        src={props.image}
        className='w-full h-full  object-cover'
        alt='Top Students'
      />
  </div>
  <div className='bg-gray-400 h-20 w-80 ml-10'>
        <h2 className='ml-12 pt-3 font-bold'>{props.name}</h2>
        <p className='ml-12'>{props.descp}</p>
      </div>
</div>
  )
}

export default Card
