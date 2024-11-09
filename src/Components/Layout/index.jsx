import { motion } from 'framer-motion'
import React from 'react'

const index = ({children}) => {
  return (
    <div variants={{
      hidden:{opacity:0},
      show:{
        opacity:1,
        transition:{
          staggerChildren:0.25,
        }
      }
    }}>
    <div className=' flex flex-col  min-h-[100vh] pt-5 bg-gradient-to-r from-zinc-900 via-amber-950 to-zinc-900  w-[100%]'>
        {children}
    </div>
    </div>
  )
}

export default index