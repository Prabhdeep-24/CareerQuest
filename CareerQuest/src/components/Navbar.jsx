import React, { lazy } from 'react'
import logo from '../assets/CareerQuestLogo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex px-14 py-4 items-center h-20 w-full gap-16 bg-gradient-to-r from-gray-900 via-deep-blue to-gray-900 sticky top-0 z-20 shadow-xl border-b border-teal-700/30'>
        <img src={logo} alt="Career Quest Logo" className='h-20 w-20 p-2 rounded-full hover:scale-110 hover:rotate-12 transition-transform duration-300'/>
        <Link to="/" className='text-teal-100 font-poppins text-xl font-semibold tracking-wide hover:text-bright-yellow hover:scale-105 transition-all duration-300 cursor-pointer'>Home</Link>
        <Link to="/MyCareerPath" className='text-teal-100 font-poppins text-xl font-semibold tracking-wide hover:text-bright-yellow hover:scale-105 transition-all duration-300 cursor-pointer'>My CareerPath</Link>
    </div>
  )
}

export default Navbar