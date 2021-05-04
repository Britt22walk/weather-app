import React, { Component } from "react";
import CurrentWeatherFormat from "../CurrentWeatherFormat/CurrentWeatherFormat";
import SevenDayForecastContainer from '../SevenDayForecastContainer/SevenDayForecastContainer';

export default function CurrentWeatherResults(props) {
  
  const resultsDisplay = props.location ? (
    <div>
      <CurrentWeatherFormat weather={props} />
      {/*<SevenDayForecastContainer weather={props} />*/}
    </div>
  ) : 
  
    <h3>Enter a city, zip code, or post code</h3>
  
  return (
    <div className="currentWeatherResults">
      {resultsDisplay}
    </div> 
   
  );
}
