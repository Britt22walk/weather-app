import React from 'react'
import './CurrentWeatherFormat.css'



export default function CurrentWeatherFormat(props){
  
    const { weather } = props;
    
    return (
    <div className='currentWeatherFormat container'>
      <h1 className='display-5'>Current weather in... </h1> 
      <h2 className='display-6'>{weather.location.name}, {weather.location.country}</h2>
        
          <div className="row">
            <div className="col-6"><h3>Current Tempature: </h3><p>{weather.current.temp_f} Degrees F</p></div>
            <div className="col-6"><h3>Feels like: </h3><p>{weather.current.feelslike_f} Degrees F</p></div>
          </div>
          <div className="row">
            <div classname="col-12">
              <img className="weather-img" src={weather.current.condition.icon} />
            </div>
          </div>
          <div className="row">
            <div className="col-6"><h3>Humidity: </h3><p>{weather.current.humidity}% </p></div>
            <div className="col-6"><h3>Conditions: </h3><p>{weather.current.condition.text}</p></div>
          </div>
      </div>  
    
    )
}