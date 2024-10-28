import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState, useTransition } from 'react'
import Burger from "../assets/menu/Burger.png";
import Pizza from "../assets/menu/pizza.png";
import Noodles from "../assets/menu/noodles.png";
import Rice from "../assets/menu/nasiGoreng.png";
const About = () => {
  const [toggle,setToggle] = useState(false)
  const data = [
    {
      img:Burger,
      price:"15.000",
      name : "Burger"},
    {
      img:Pizza,
      price:"25.000",
      name : " Latte"},
      {
        img:Noodles,
        price:"10.000",
        name : "Vietnam Drip"},
      {
        img: Rice,
        price:"15.000",
        name : "fried rice"},
  ]

  const listMenu = ['COFFEE','ICE','FOODS']
  const color ='bg-amber-900'
  return (
    <section className='w-full flex flex-col justify-center items-center h-full text-white'>
      <div className="flex w-[90%] h-[3rem] bg-white/55 rounded-full justify-between items-center">
      {listMenu.map(e=>{
        return(
          <h1 onClick={()=>{setToggle(color)}} 
            className={`text-xl font-semibold px-5 rounded-full ${toggle ? 'bg-amber-900' : 'bg-transparent'}`}>{e}</h1>
        )
      })}
      </div>
        <div className='grid grid-cols-2 w-full sm:grid-cols-3 '>
        {data.map(e=>{
          return(
            <div className=" m-2 h-[13rem] hover:scale-90 hover:duration-100 flex relative flex-col items-center">
                  <img src={e.img} alt="" className='h-20 z-20 '/>
                  <div className="bg-white/50 w-full flex flex-col h-[10rem] rounded-3xl items-center pt-8 absolute z-0 top-12">
                    <h1 className="text-xl font-extrabold ">{e.name}</h1>
                    <div className="w-1/2 flex items-center">
                    <Icon icon="mdi-light:home" className="size-9" />
                      <p className="text-xl font-bold">{e.price}</p>
                    </div>
                  </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default About
