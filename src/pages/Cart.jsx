import React, { useContext} from 'react'
import Footer from '../Components/Layout/Footer'
import { CartContext } from '../context/CartContext'
import { motion } from 'framer-motion'
const Cart = () => {
  const {cart,removeItem,totalPrice} = useContext(CartContext)

console.log(totalPrice())
  return (
    <>
    <div className="w-[100%]  flex flex-col absolute top-[20rem] min-h-[20rem] bg-slate-500 "></div>
    <motion.div className='w-full flex flex-col items-center bg-gradient-to-r min-h-[100vh] from-zinc-900 via-amber-950 to-zinc-900'
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
    animate='show'
    >
      <h1 className='w-full text-center text-5xl py-10  font-bold text-white'>ORDERS</h1>
      {cart.map(e=>{
        return(
          <motion.div className="h-[5.5rem] w-[96%] bg-white/20 relative my-2 px-10 flex justify-between items-center text-white rounded-xl" key={e.id}
          variants={{
            hidden:{opacity:0, y:-100},
            show:{
              opacity:1,
              y:0,
              transition:{
                staggerChildren:0.25,
              }
            }}
          }
          >
              <button 
                onClick={()=>{removeItem(e.id)}}
                className="flex absolute right-3 -top-2 text-3xl active:text-red-500">x</button>
            <div>
              <h1 className='text-2xl font-semibold'>{e.name}</h1>
              <h1>{e.price}</h1>
            </div>
            <h1>{e.price}</h1>
          </motion.div>
        )
      })}
      {cart.length > 0 && <div className="w-[96%] bg-slate-500 rounded-3xl items-center flex fixed bottom-[4rem] py-1 px-5 justify-between bg-white/20 text-white  2">
        <h1 className='text-3xl text-left  font-semibold'>{totalPrice()}.000</h1>
        <h1 className='text-xl text-left font-bold '>PAYMENT</h1>
      </div>} 
        <Footer/>
    </motion.div>
    </>

  )
}

export default Cart