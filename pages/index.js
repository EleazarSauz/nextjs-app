import React, { useState, useEffect } from 'react'

import { getListPhoto } from '../resources/functions'
import Card from '../components/Card'


export default function Home() {
  const [listPhoto, setListPhoto] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(0)
  useEffect(() => {
    setIsLoading(true)

    getListPhoto(page)
      .then(photo => {
        setListPhoto(photo)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  },[page])

  const paginationList = [1, 2 ,3]

  return (
    <>
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <i className="fa fa-4x fa-camera"></i>
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900">Photos Unsplash!</h4>
          <p className="text-base text-gray-600">Click on the image</p>
        </div>
      </div>

      <div className="mt-5 mx-auto px-2 flex justify-center">
        {
          paginationList.map((item, index) =>(
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" 
              onClick={() => setPage(item)} key={index}>
              {item}
            </button>
          ))
        }
      </div>

      <div className="container mx-auto px-2">
        {
          isLoading 
          ?
          <h3 className="text-center text-4xl animate__animated animate__flash my-6">
            Loading...
          </h3> 
          :
          <div className="grid gap-4 sm:grid-cols-3 flex justify-center animate__animated animate__fadeIn">
            {
              listPhoto.map((i, index) => <Card dataCard={i} key={index}/> )
            }
          </div>
        }
      </div>
    </>
  )
}
