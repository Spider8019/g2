import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div
      className="w-full grid place-items-center"
      style={{
        height: 'calc(100vh - 96px)',
        // background:
        //   ' linear-gradient(transparent,#000), url("https://i.pinimg.com/736x/8f/35/3c/8f353cf52588e3cb1fac5d07c8ab0dd1.jpg")',
        // backgroundSize: '80px',
      }}
    >
      <div className="w-2/3 flex flex-col items-center">
        <div className="flex gap-8 mb-8">
          <img
            src="https://i.pinimg.com/736x/8f/35/3c/8f353cf52588e3cb1fac5d07c8ab0dd1.jpg"
            alt="logo playstore"
            className="h-28 w-28 object-contain rounded-xl shadow-xl"
          />
          <img
            src="https://s.yimg.com/fz/api/res/1.2/isfIi1loOPBuvr5c1qYPEA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/5aa29e7f-1a02-3fce-bd73-9f3ec40b304e/t_500x300"
            alt="logo playstore"
            className="h-28 w-28 object-contain rounded-xl shadow-xl"
          />
        </div>
        <div className="text-center">
          <p className="text-4xl mb-8">Download the app with just one click.</p>
          <div className='flex gap-4 justify-center'>
            <NavLink to="/">
              <p className="p-4 bg-[#5271FF] rounded-xl text-2xl text-white cursor-pointer shadow-xl">
                Home
              </p>
            </NavLink>
            <NavLink to="https://play.google.com/store/apps/details?id=com.spydar.tour">
              <p className="p-4 bg-[#5271FF] rounded-xl text-2xl text-white cursor-pointer shadow-xl">
                Download Now
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
