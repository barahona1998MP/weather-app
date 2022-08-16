import React from 'react'
import './loading.css'

const LoadingScreen = () => {

    return (
        <div className="container">
            <div className="cubo">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="loading">
                <div>
                    <h1 className='loading__title'>Loading</h1>
                    <p className='loading__puntos'>...</p>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen