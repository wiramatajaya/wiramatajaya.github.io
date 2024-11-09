import React from 'react'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Pages from './Components/Layout/index'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-w-[100%]'>
      {/* <Navbar/>  */}
      <Pages>
        <Outlet/>
      </Pages>
      <Footer/>
    </div>
  )
}

export default App