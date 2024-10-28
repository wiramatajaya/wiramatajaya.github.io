import React from 'react'
import Button from '../atoms/Button'
import { SecTitle, TextSm } from '../atoms/Text'

const Card = ({imgs}) => {
  const data = [
    {
      img:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-coffee-coffee-beans-latte-art-transparent-png-image_6698454.png",
      name : "Americano"},
    {
      img:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-coffee-coffee-beans-latte-art-transparent-png-image_6698454.png",
      name : "Vietnam Drip"},
    {
      img:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-coffee-coffee-beans-latte-art-transparent-png-image_6698454.png",
      name : " Latte"},
  ]
  return (
    <div className='grid grid-cols-2'>
      {data.map(e=>{
        return(
          <div className='rounded-lg border-[1px] border-gray-600  h-[20rem]  relative'>
            <img src={imgs} alt="noimage" className='w-full h-[50%] rounded-lg object-center bg-slate-400' />
            <h5 className=''>{e.name}</h5>
              <div className='flex absolute bottom-4'>
                  <Button>Detail</Button><Button>Add to cart</Button>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card