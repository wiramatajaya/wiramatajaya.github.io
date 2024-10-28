import { Icon } from '@iconify/react/dist/iconify.js'
import { Envelope, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'
import Logo from '../../assets/whiteLogo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
<div className="w-full h-12 bg-amber-900 flex fixed bottom-0 left-0 px-10 items-center justify-between z-50">
    <Link to={'/'}><Icon icon={'line-md:home-twotone'} className='size-10 text-white hover:scale-90 hover:cursor-pointer '/></Link>
    <img src={Logo} alt="" className='w-[4rem] h-[4rem]'/>
    <Link to={'/'}><Icon icon={'solar:cart-4-line-duotone'} className='size-10 text-white hover:scale-90 hover:cursor-pointer '/></Link>

</div>
  )
}

export default Footer