import React, { useState, useEffect } from 'react'

import { getListImg } from '../resources/functions'


export default function Home() {
  const [listPhoto, setListPhoto] = useState([])
  useEffect(() => {
    getListImg()
      .then(photo => setListPhoto(photo))
      .catch(err => console.log(err))
  },[])

  return (
    <>
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="flex-shrink-0">
        <i className="fa fa-4x fa-camera"></i>
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900">Photos Unsplash!</h4>
        <p className="text-base text-gray-600">Get a single page from the list of all photos.</p>
      </div>
    </div>

    <div className="container mt-5 mx-auto px-2">
      <div className="grid gap-4 sm:grid-cols-3 flex justify-center">

        {
          listPhoto.map((i, index) =>(
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg my-6">
              <img className="w-full" src={i.urls.regular} alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{i.alt_description}</div>
              </div>
              <div className="px-6 pb-4 flex items-center justify-between">
                <div className="text-md mb-2"> Date: <br/>{new Date(i.created_at).toLocaleDateString()}</div>
              
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  <i className="fa fa-2x fa-thumbs-up animate__animated animate__bounce " style={{color: "#4ea4ef"}}></i>
                    &nbsp;{i.likes}
                  </span>
                </div>
              </div>

              <div className="px-6 py-4 flex justify-center">
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src={i.user.profile_image.medium} alt="Avatar of Jonathan Reinink"/>
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">{i.user.name}</p>
                    <p className="text-gray-600">{i.user.username}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}
