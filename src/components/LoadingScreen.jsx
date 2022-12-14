import React from 'react'
import "./loading.css";

const LoadingScreen = () => {

    return (
        <div className="porfolio__loader">
        <div className="sun"></div>
        <div className="orbit orbit1">
          <div className="planetX planet1"></div>
        </div>
        <div className="orbit orbit2">
          <div className="planetX planet2"></div>
        </div>
        <div className="orbit orbit3">
          <div className="planetX planet3"></div>
        </div>
      </div>
    )
}

export default LoadingScreen