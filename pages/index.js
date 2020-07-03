import React, { useState, useEffect } from 'react'

import { getListImg } from '../resources/functions'
export default function Home() {
  const [listPhoto, setListPhoto] = useState([])
  useEffect(() => {
    getListImg().then(photo =>setListPhoto(photo))
  },[])
  return (
    <>


    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="flex-shrink-0">
        <i className="fa fa-4x fa-camera"></i>
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900">YEMA</h4>
        <p className="text-base text-gray-600">You have a new photo!</p>
      </div>
    </div>

    <div className="container mt-5 mx-auto px-2">
      <div className="md:flex">

        {
          listPhoto.map((i, index) =>(
            <div key={index} class="max-w-sm rounded overflow-hidden shadow-lg my-6">
              <img class="w-full" src={i.urls.regular} alt="Sunset in the mountains"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">{i.alt_description}</div>
              </div>
              <div class="px-6 pb-4 flex items-center justify-between">
                <div class="text-md mb-2"> Fecha: <br/>{new Date(i.created_at).toLocaleDateString()}</div>
              
                <div class="px-6 py-4">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  <i className="fa fa-2x fa-heart animate__animated animate__infinite animate__pulse " style={{color: "#ef4e5b"}}></i>
                    &nbsp;{i.likes}
                  </span>
                </div>
              </div>

              <div class="px-6 py-4 flex justify-center">
                <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src={i.user.profile_image.medium} alt="Avatar of Jonathan Reinink"/>
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">{i.user.name}</p>
                    <p class="text-gray-600">{i.user.username}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        {/* <div key={index}
          className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded"
        >
          <div className="lg:flex lg:items-center">
            <div className="lg:flex-shrink-0">
              <img className="rounded-lg lg:w-64" src={i.urls.regular} alt="" />
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-6">
              <div
                className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
              >
                {i.user.name}
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                >{i.alt_description}</a
              >
            </div>
          </div>
        </div> */}


      </div>
    </div>
    </>
  )
}
