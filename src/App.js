import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SevenDayWeather from './SevenDayWeather';


function App() {
    const [weatherData,setWeatherData] = useState({})
    const [location, setLocation] = useState('')
  
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1c640ec399621bc7bb33594e610b51e7`
  

  const searchLocation = (event) => {
    if (event.key == 'Enter'){
      axios.get(url)
      .then((response) => {
        console.log("first call", response.data)
       return response.data
      })
      .then( (weather) => {axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=minutely,hourly&units=imperial&appid=1c640ec399621bc7bb33594e610b51e7`)
      .then((response)=>{
        setWeatherData(response.data)
        console.log("7 day weather",response.data)
        
        return response.data
        
      })
      
      
    }
   )
  }}
  
  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>

      
{/*       
      <div className="currentWeather">
        {weatherData.current ? <p>{weatherData.current.temp}°F</p>:null}
        {weatherData.daily ? <p>{weatherData.daily[0].temp.day}°F</p>:null}
      </div> */}
      
      {weatherData.daily ? <SevenDayWeather weather={weatherData.daily}/>:null}

    </div>
  );
}

export default App;