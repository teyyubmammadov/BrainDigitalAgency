import React from 'react'

const Worker = ({ workerImg, workerName, workerRank, workerMedia }) => {
    return (

            <div className="card col-12 col-md-6 col-lg-3 my-5 text-center bg-white" >
                <img src={workerImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{workerName} </h5>
                    <p className="card-text">{workerRank} </p>
                    <a href="#" className="btn btn-primary">{workerMedia} </a>
                </div>
            </div>
    
    )
}

export default Worker