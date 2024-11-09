import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <Icon icon='eos-icons:bubble-loading' className='size-20 text-yellow-900'/>
    </div>
  )
}

export default Loading