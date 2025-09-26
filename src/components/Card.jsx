import React from 'react'

const Card = ({image}) => {
  return (
      <div className=' bg-zinc-500/40 py-10 px-10  w-100 rounded-2xl flex justify-center items-center'>
        <img src={image} alt="" />
      </div>
    
  )
}

export default Card
