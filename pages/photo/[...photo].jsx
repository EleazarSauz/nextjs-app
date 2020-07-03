import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


import { getDataPhoto } from '../../resources/functions.js'
import Card from '../../components/Card'

export default function Photo() {
    const [dataPhoto, setDataPhoto] = useState(null)
    const router = useRouter()
    const { photo } = router.query
    useEffect(() => {
        getDataPhoto(photo)
        .then(photo => setDataPhoto(photo))
        .catch(err => console.log(err))
    }, [photo])
    if (!dataPhoto) return <h2 className="text-center text-6xl my-6">Not Found</h2>
    return (
        <>
            <h2 className="text-center text-4xl my-6">{dataPhoto.description}</h2>
            <div className=" flex items-center justify-center">
                <Card dataCard={dataPhoto}/>
            </div>
            <div className=" flex items-center justify-center">
                <button onClick={() =>Router.back()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <i className="fa fa-2x fa-hand-point-left "></i>
                </button>
            </div>
        </>
    )
}
