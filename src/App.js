import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
    const [weatherData,setWeatherData] = useState({})
    const [location, setLocation] = useState('')
  
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1c640ec399621bc7bb33594e610b51e7`

  //const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,alerts&appid=1c640ec399621bc7bb33594e610b51e7`


  const searchLocation = (event) => {
    if (event.key == 'Enter'){
      axios.get(url)
      .then((response) => {
        setWeatherData(response.data)
        console.log(response.data)
       return response.data
      })
      .then( (weather) => {axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=minutely,hourly&units=imperial&appid=1c640ec399621bc7bb33594e610b51e7`)
      .then((response)=>{
        setWeatherData(response.data)
        return response.data
      })
      
      setLocation('')
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
      <div>
        <p></p>
      </div>
      {/* <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1>: null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>

        {data.name != undefined && <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p>:null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p>:null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed} MPH</p>:null}
            <p>Wind Speed</p>
          </div>
        </div>}
        


      </div> */}
    </div>
  );
}

export default App;
