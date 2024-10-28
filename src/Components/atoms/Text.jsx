import React from 'react'

export const MainTitle = ({children}) => {
  return (
    <h1 className='text-5xl font-extrabold'>{(children).toUpperCase()}</h1>
  )
}

export const SecTitle =({children})=>{
  return(
    <h1 className='sm:text-xl text-3xl font-bold'>{children}</h1>

  )
}

export const TextSm=({children})=>{
  return(
    <p className='text-sm'>{children}</p>
  )
}