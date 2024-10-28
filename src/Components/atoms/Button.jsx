import React, { Children } from 'react'

const Button = ({children}) => {
  return (
    <button className='max-sm:text-xs bg-blue-800 text-white p-1 rounded-lg min-w-[5rem] hover:scale-95 m-2 hover:shadow-xl active:bg-blue-600 hover:duration-150'>{children}</button>
  )
}

export default Button