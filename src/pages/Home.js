import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div
      className="w-full grid place-items-center my-8 sm:my-0"
      style={{
        height: 'calc(100vh - 96px)',
        // background:
        //   ' linear-gradient(transparent,#000), url("https://i.pinimg.com/736x/8f/35/3c/8f353cf52588e3cb1fac5d07c8ab0dd1.jpg")',
        // backgroundSize: '80px',
      }}
    >
      <div className="w-3/4 sm:w-2/3 flex flex-col items-center">
        <div className="flex gap-8">
          <img
            src="https://i.pinimg.com/736x/8f/35/3c/8f353cf52588e3cb1fac5d07c8ab0dd1.jpg"
            alt="logo playstore"
            className="h-16 sm:h-28 w-16 sm:w-28 object-contain"
          />
          <img
            src="https://s.yimg.com/fz/api/res/1.2/isfIi1loOPBuvr5c1qYPEA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/5aa29e7f-1a02-3fce-bd73-9f3ec40b304e/t_500x300"
            alt="logo playstore"
            className="h-16 sm:h-28 w-16 sm:w-28 object-contain"
          />
        </div>
        <div className="text-center">
          <p className="text-4xl my-8">ghumakkad</p>

          <p className="text-center">
            Embark on a journey of discovery with "ghumakkad" on the Google Play
            Store! Whether you're seeking cultural experiences, adventure, or
            simply the best local spots, "ghumakkad" is your guide to exploring
            Indian cities like never before. Find hidden gems, top attractions,
            and insider tips—all at your fingertips. Download "ghumakkad" now
            and start exploring!
          </p>
        </div>''
        <NavLink to="https://play.google.com/store/apps/details?id=com.spydar.tour" target="_blank" className="my-4 sm:my-8">
          <p className="p-4 bg-[#5271FF] rounded-xl text-2xl text-white cursor-pointer shadow-xl">
            Download Now
          </p>
        </NavLink>
      </div>
    </div>
  )
}

export default Home