import React from 'react'
// import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 sm:py-4 sm:px-20 bg-white shadow">
      <img
        src="https://i.pinimg.com/736x/8f/35/3c/8f353cf52588e3cb1fac5d07c8ab0dd1.jpg"
        alt="logo"
        className="h-16 w-16 object-contain"
      />
      <div className='flex gap-4'>
        {/* <NavLink to="/">
          <p className='text-xl font-semibold'>Home</p>
        </NavLink>
        <NavLink to="/contacts">
          <p className='text-xl font-semibold'>Contacts</p>
        </NavLink> */}
      </div>
    </div>
  )
}

export default Header
