import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'

const CategoryWise = () => {
  //   const [data, setPosts] = useState({})
  const { id } = useParams()
  const { isLoading, error, data } = useQuery('fetchingDataCategoryWise', () =>
    axios
      .get(
        'https://ap-south-1.aws.data.mongodb-api.com/app/ghumakkadapplication-fqtdx/endpoint/quickAttractions',
      )
      .then((response) => {
        // console.log(response)
        // console.log(response.json())
        return response.data.filter((item) => {
          return item._id === id
        })[0]
      }),
  )
  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: {error.message}</p>
  return (
    <div
      className="w-full grid place-items-center sm:my-8 bg-slate-200"
      style={{
        minHeight: 'calc(100vh - 120px)',
        // background:
        //   ' linear-gradient(transparent,#000), url("https://i.pinimg.com/736x/8f/35/3c/8f353cf52588e3cb1fac5d07c8ab0dd1.jpg")',
        // backgroundSize: '80px',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={data.labelForTitle} />
        <meta property="og:description" content={data.title} />
        <meta property="og:image" content={data.coverImage} />
      </Helmet>
      <div className="m-4 sm:m-20 grid sm:grid-cols-2 grid-cols-1 sm:gap-20">
        <img
          src={data.coverImage}
          alt="Cover"
          className="w-full rounded-xl bg-white sm:sticky sm:top-8"
        />
        <div className="block sm:hidden">
          <div className="flex justify-center w-full gap-4 mt-8 flex-row mb-8">
            <NavLink
              to="https://play.google.com/store/apps/details?id=com.spydar.tour"
              target="_blank"
              className=""
            >
              <p className="p-2 sm:p-4 bg-[#5271FF] w-full sm:w-fit rounded-xl text-xl sm:text-2xl text-white cursor-pointer shadow-xl">
                Download .APK from Playstore
              </p>
            </NavLink>
          </div>
          <div className="flex justify-center w-full gap-4 mb-8">
            <NavLink
              to="https://play.google.com/store/apps/details?id=com.spydar.tour"
              target="_blank"
              className=""
            >
              <p className="p-2 sm:p-4 bg-[#5271FF] w-full sm:w-fit rounded-xl text-xl sm:text-2xl text-white cursor-pointer shadow-xl">
                Download .APK from Playstore
              </p>
            </NavLink>
          </div>
        </div>

        <div>
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-l">{data.labelForTitle}</p>
            <p className="text-3xl font-semibold">{data.title}</p>
          </div>
          <div className="mt-8 ">
            <p className="text-xl text-center sm:text-left">List of places</p>
            <div>
              {data.attractions.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex p-4 my-4 bg-white rounded-xl items-center gap-8"
                  >
                    <img
                      src={item.placeImage}
                      alt="Place"
                      className="h-12 w-12 rounded-xl"
                    />
                    <div>
                      <p className="text-xl font-semibold">{item.placeName}</p>
                      <p className="text-m sm:text-xl">{item.placeCity}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex gap-4 mt-8 justify-center sm:justify-start flex-row">
            <NavLink
              to="https://play.google.com/store/apps/details?id=com.spydar.tour"
              target="_blank"
            >
              <p className="p-2 sm:p-4 bg-[#5271FF] w-full sm:w-fit rounded-xl text-xl sm:text-2xl text-white cursor-pointer shadow-xl">
                Download .APK from Playstore
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryWise
