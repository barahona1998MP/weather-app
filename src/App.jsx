
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'
import LoadingScreen from './components/LoadingScreen'

function App() {

  const [coords, setcoords] = useState()
  
  useEffect(() => {

    const success = pos => {
      const latLon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setcoords(latLon)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  //console.log(coords)
  return (

    <div className="App">
      <CardWeather lon={coords?.lon} lat={coords?.lat}/>
    
    </div>
  )
}

export default App
