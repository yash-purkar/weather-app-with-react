import React, { useState, useEffect } from 'react';
import TempCard from './TempCard';
import './styles.css'

const Temp = () => {
  const [inputCity, setInputCity] = useState("Ahmednagar");
  const [weatherData, setWeatherData] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);


  const getWeather = async () => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.replace(" ", "")}&appid=2d9f020388f73c365b0cc6457b04233e`);
      let data = await response.json();
      // console.log(data);
      const { temp, humidity } = data.main;
      const { main } = data.weather[0];
      const name = data.name;
      const { sunset, country } = data.sys;
      // console.log(temp, humidity, name, sunrise, sunset, main);

      const weatherInfo = {
        temp: temp,
        humidity: humidity,
        main: main,
        name: name,
        sunset: sunset,
        country: country
      }
      setWeatherData(weatherInfo);
      setNotFound(false);
      setLoading(false)
    }

    catch (err) {
      console.log("Not found");
      setNotFound(true);

    }
  }

  useEffect(() => {
    getWeather();

  }, [])


  return (
    <>
      {
        loading ? <h2 id='loading'>Loading...</h2>
          :
          <div className="parent">
            <h1>Weather App</h1>
            <div className="main-div">
              <div className="search">
                <input type="text"
                  value={inputCity}
                  onChange={(e) => setInputCity(e.target.value)}
                  placeholder="Enter City Name" autoFocus="off" className='input-city' />
                <button onClick={getWeather} className='search-btn'>Search</button>
              </div>
            </div>
            {
              notFound ? <h2 id='not-found'>City Not Found🤪!!</h2>
                :
                <TempCard weatherInfo={weatherData} />
            }
          </div>
      }


    </>
  )
}

export default Temp