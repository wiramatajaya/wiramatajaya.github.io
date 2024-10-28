import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState, useTransition } from 'react'
import Burger from "../assets/menu/Burger.png";
import Pizza from "../assets/menu/pizza.png";
import Noodles from "../assets/menu/noodles.png";
import Rice from "../assets/menu/nasiGoreng.png";
const Foods = () => {
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
        name : "Noodles"},
      {
        img: Rice,
        price:"15.000",
        name : "fried rice"}, {
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
            name : "Noodles"},
          {
            img: Rice,
            price:"15.000",
            name : "fried rice"}, {
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
        name : "Noodles"},
      {
        img: Rice,
        price:"15.000",
        name : "fried rice"},
        
  ]

  const listMenu = ['COFFEE','ICE','FOODS']
  const color ='bg-amber-900'
  return (
    <section className='w-full flex flex-col justify-center items-center h-full text-white'>
        <div className='grid grid-cols-2 w-full sm:grid-cols-3 '>
        {data.map(e=>{
          return(
            <div className=" m-2 h-[10rem] hover:scale-90 hover:duration-100 flex my-5 relative flex-col items-center">
                  <img src={e.img} alt="" className='h-20 z-20 '/>
                  <div className="bg-white/50 w-full flex flex-col h-[8rem] rounded-3xl items-center pt-8 absolute z-0 top-12">
                    <h1 className="text-xl font-extrabold ">{e.name}</h1>
                    <div className=" flex items-center  justify-between  absolute bottom-3 ">
                        <div className='flex items-center rounded-2xl border-[1px] border-amber-900'>
                            <Icon icon="ic:baseline-plus" className="size-9 p-[1px]  bg-amber-900 rounded-xl" />
                            <p className="text-xl font-bold px-1" >{e.price}</p>
                        </div>
                        <Icon icon='line-md:heart-filled' className='size-9 p-[1px] mx-2'/>
                    </div>
                  </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Foods
