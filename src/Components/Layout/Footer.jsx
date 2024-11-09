import { Icon } from '@iconify/react/dist/iconify.js'
import { Envelope, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import Logo from '../../assets/whiteLogo.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
const Footer = () => {
  const {cart} = useContext(CartContext)
  return (
<div className="w-full h-12 bg-amber-900 flex fixed bottom-0 left-0 px-10 items-center justify-between z-50">
    <Link to={'/menu'}> <Icon icon={'line-md:home-twotone'} className='size-10 text-white hover:scale-90 hover:cursor-pointer '/></Link>
    <Link to={'/'}>
    <img src={Logo} alt="" className='w-[4rem] h-[4rem]'/>
    </Link>
   
   
    <Link to={'/cart'}
    className="flex relative"
    >
      {cart.length >= 1  && <div className='absolute text-white flex -top-2 -right-2 bg-red-600 p-1 size-6 text-sm justify-center items-center rounded-full '>{cart.length}</div>}
      <Icon icon={'solar:cart-4-line-duotone'} className='size-10 text-white hover:scale-90 hover:cursor-pointer '/>
      </Link>

</div>
  )
}

export default Footer