import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useContext, useState, useTransition } from 'react'
import { ListMenu } from './data';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';
const Menu = () => {
  const [toggle,setToggle] = useState(false)
  const [listItem,setListMenu] = useState()
const option = ['coffee','ice','foods']
const getLinkClass = (path) => {
  return listItem === path
      ? ' text-2xl duration-80 font-bold px-5 rounded-full py-10 text-blue-500 cursor-pointer' // Active link color
      : ' text-sm  font-semibold px-5 rounded-full py-10 text-white cursor-pointer'; // Default link color
};
const item = ListMenu.filter(e=>e.category === listItem)


const {AddToCart} = useContext(CartContext)


  return (
    <section  className='w-full flex flex-col justify-center items-center h-full text-white'>
       <motion.div        
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y:-100 }} transition={{ duration: 1 }}  className="flex w-[90%] h-[3rem]  bg-amber-900 rounded-full justify-between items-center">
    {option.map(e=>{
      return(
        <p onClick={()=>{setListMenu(e)}}
          className={` ${getLinkClass(`${e}`)} active:scale-95  active:duration-700`}>{e.toLocaleUpperCase()}</p>
      )
    })}
    </motion.div>
        <motion.div className='grid grid-cols-2 w-full sm:grid-cols-3 '
         variants={{
          hidden:{opacity:0},
          show:{
            opacity:1,
            transition:{
              staggerChildren:0.25,
            }
          }
        }}    
        initial='hidden'
        animate='show'>
          
        {!listItem?(
          ListMenu.map(e=>{
            return(
              <motion.div 
              variants={{
                hidden:{opacity:0, y:200},
                show:{
                  y:0,
                  opacity:1,
                  transition:{
                    staggerChildren:0.25,
                  }
                }}
              }
              className=" m-2 h-[10rem] hover:scale-90 hover:duration-100 flex my-5 relative flex-col items-center">
                    <img src={e.img} alt="" className='h-20 z-20 '/>
                    <div className="bg-white/50 w-full flex flex-col h-[8rem] rounded-3xl items-center pt-8 absolute z-0 top-12">
                      <h1 className="text-xl font-extrabold ">{e.name}</h1>
                      <div className=" flex items-center  justify-between  absolute bottom-3 ">
                          <div className='flex items-center rounded-2xl border-[1px] border-amber-900'>
                              <button  onClick={()=>{
                                const data = {name : e.name , id : new Date(), price : e.price}
                                AddToCart(data)}} >
                            <Icon icon="ic:baseline-plus" className="size-9 p-[1px] active:scale-95 bg-amber-900 rounded-xl" />
                          </button>
                              <p className="text-xl font-bold px-1" >{e.price}</p>
                          </div>
                          <Icon icon='line-md:heart-filled' className='size-9 p-[1px] mx-2'/>
                      </div>
                    </div>
              </motion.div>
            )
          })
        ):(
          item.map(e=>{
          return(
            <div className=" m-2 h-[10rem] hover:scale-90 hover:duration-100 flex my-5 relative flex-col items-center">
                  <img src={e.img} alt="" className='h-20 z-20 '/>
                  <div className="bg-white/50 w-full flex flex-col h-[8rem] rounded-3xl items-center pt-8 absolute z-0 top-12">
                    <h1 className="text-xl font-extrabold ">{e.name}</h1>
                    <div className=" flex items-center  justify-between  absolute bottom-3 ">
                        <div className='flex items-center rounded-2xl border-[1px] border-amber-900'>
                            <button  onClick={()=>{AddToCart(e)}} >
                            <Icon icon="ic:baseline-plus" className="size-9 p-[1px] active:scale-95 bg-amber-900 rounded-xl" />
                          </button>
                            <p className="text-xl font-bold px-1" >{e.price}</p>
                        </div>
                        <Icon icon='line-md:heart-filled' className='size-9 p-[1px] mx-2'/>
                    </div>
                  </div>
            </div>
          )
        })
      )
      }
      </motion.div>
    </section>
  )
}

export default Menu
