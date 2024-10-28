import React from 'react'
import Logo from '../assets/menu/coffeMenu.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-full flex flex-col h-[35rem]  items-center bg-white'>
      <div className="text-xl font-light mt-5 p-1 border-amber-900 rounded-full border-s-2 border-b-8 "> Wirr</div>
      <img src={Logo} alt=""  className='ml-10 mt-5 '/>
      <h1 className='text-4xl font-light text-center'>  Find your favorite</h1>
      <h1 className='text-4xl font-extrabold text-center'> Wiramatajaya  </h1>
      <h1 className='text-2xl font-bold text-center'>  Coffee </h1>
      <div className='flex flex-col w-full left-0 absolute -bottom-8 items-center h-[10rem] bg-gradient-to-r pb-20 from-zinc-900 via-amber-950 to-zinc-900 rounded-s-3xl rounded-r-3xl '>
        <Link to='/menu' className='p-2 bg-amber-800 mt-10 rounded-2xl text-xl font-semibold text-white'>View Menu</Link>
      </div>
    </div>
  )
}

export default Home