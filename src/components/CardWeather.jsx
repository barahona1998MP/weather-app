import axios from 'axios'
import React, { useEffect, useState} from 'react'
import LoadingScreen from './LoadingScreen'

const CardWeather = ({lon, lat}) => {
    const [weather, setWeather] = useState()
    const [temperture, setTemperture] = useState()
    const [isCelsius, setIsCelsius] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(lat){
            const APIKey = `08bc560bf4087d1de5d1cb7224fb6d2c`
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`

            axios.get(URL)
            .then(res => {
              setWeather(res.data)
              const temp = {
                celsius: `${Math.round(res.data.main.temp - 273.15)} °C`,
                farenheit: `${Math.round((res.data.main.temp - 273.15) * 9 / 5 + 32)} °F`
              }
              setTemperture(temp)
              setIsLoading(false)
            })
            .catch(err => console.log(err))
        }
    }, [lat, lon])
    console.log(weather)
    const handleClick = () => setIsCelsius(!isCelsius)
    if(isLoading) {
      return <LoadingScreen/>
    } else {
        return (
          <article className='container__principal'>
            <div className="container__title">
              <h1 className='title centrar'>Weather App</h1>
              <h2 className='subtitle centrar'>{`${weather?.name} ${weather?.sys.country}`}</h2>
            </div>
            <div className='container__weather'>
              <div className='container__temp'>
                <img className='weather__img' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                <h2 className='temperatura'>{isCelsius ? temperture?.celsius : temperture?.farenheit}</h2>
              </div>
              <div className='container__info'>
                <h3 className='title__description'>"{`${weather?.weather[0].description}`}"</h3>
                <p className='description'>Descripton</p>
                <ul className='list__info'>
                  <li className='list__item'><span className='list__span'>Wind Speed </span>{weather?.wind.speed} m/s</li>
                  <li className='list__item'><span className='list__span'>Clouds </span>{weather?.clouds.all}%</li>
                  <li className='list__item'><span className='list__span'>Pressure </span>{weather?.main.pressure} hPa</li>
                </ul>
              </div>
            </div>
            <div className='footer'>
              <button className='btn' onClick={handleClick}>{isCelsius ? 'Change to °F': 'Change to °C'}</button>
            </div>
        </article>
      )
    }
}

export default CardWeather