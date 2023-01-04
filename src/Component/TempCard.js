import React, { useState, useEffect } from 'react';
import cloudy from './Icons/cloudy.svg';
import sunny from './Icons/sunny.svg'
import rainy from './Icons/rainy.svg'
import air from './Icons/air.svg'
import haze from './Icons/haze.svg'



const TempCard = ({ weatherInfo }) => {
  const [logo, setLogo] = useState("");
  const {
    temp,
    humidity,
    main,
    name,
    sunset,
    country
  } = weatherInfo;
  // We want to convert sunrise and sunset into minutes
  let sunSetSeconds = sunset;
  let date = new Date(sunSetSeconds * 1000);
  let sunSetInMinutes = `${date.toLocaleTimeString()}`

  let tempInCel = (temp - 32) * 5 / 9;
  // Clouds Haze Clear Mist Smoke Rainy sunny

  useEffect(() => {
    // If something data is in main
    if (main) {
      switch (main) {
        case "Clouds": setLogo(cloudy);
          break;

        case "Haze": setLogo(haze);
          break;

        case "Clear": setLogo(sunny);
          break;

        case "Air": setLogo(air);
          break;

        case "Smoke": setLogo(air);
          break;

        case "Snow": setLogo(haze);
          break;

        case "Rainy": setLogo(rainy);
          break;

        default: setLogo(sunny);
          break;
      }
    }
  }, [main])


  return (
    <article className="widget">
      <div className="icon">
        <img src={logo} alt="" />
      </div>

      <div className="weather-info">
        <div className="temp">
          <span>temp : {tempInCel.toFixed(2)} &deg;</span>
        </div>

        <div className="description">
          <div className="weather-mood">weather : {main}</div>
          <div className="place">{name}, {country}</div>
        </div>
      </div>

      <p>Sunset🌄: {sunSetInMinutes}</p>

      <div className="date">
        date : {new Date().toDateString()}
      </div>
    </article>
  )
}

export default TempCard