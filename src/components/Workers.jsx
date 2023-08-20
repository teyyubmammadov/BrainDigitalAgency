import React, { useState, useEffect } from 'react'
import Worker from './Worker'
import { HiUserGroup } from "react-icons/hi";





const Workers = () => {



    const [infolar, setInfolar] = useState(null)

    useEffect(() => {
        fetch("https://64e23c64ab0037358818dc41.mockapi.io/ishciler")
            .then(response => response.json())
            .then(WorkersInfo => setInfolar(WorkersInfo))
    }, [])

    return (
        <div className="kart">
            <div className="container">
                <div className="comando-top-side">
                    <h1 className='text-white center-text mb-2'>Bizim komandamız <HiUserGroup/></h1>
                </div>
                <div className="row justify-content-around">

                    {
                        infolar && infolar.map(info => (
                            <Worker workerImg={info.worker_img} workerName={info.worker_name} workerRank={info.worker_rank} workerMedia={info.worker_media} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Workers