import {React,useState} from 'react'
import { Link,useLocation } from 'react-router-dom'

const Navbar = () => {
  const listMenu = ['COFFEE','ICE','FOODS']
  const location = useLocation()
  const getLinkClass = (path) => {
    return location.pathname === path
        ? ' text-2xl font-bold px-5 rounded-full py-10 text-blue-500' // Active link color
        : ' text-sm font-semibold px-5 rounded-full py-10 text-white'; // Default link color
};
  return (
    <div className=" w-full flex justify-center z-50 text-white items-center h-[8rem] fixed top-0  bg-transparent">
    <div className="flex w-[90%] h-[3rem]  bg-amber-900 rounded-full justify-between items-center">
    {listMenu.map(e=>{
      return(
        <Link to={`/menu/${e}`}
          className={` ${getLinkClass(`/menu/${e}`)}`}>{e}</Link>
      )
    })}
    </div>
    </div>

  )
}
export default Navbar

