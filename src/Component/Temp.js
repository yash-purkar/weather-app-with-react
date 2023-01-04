import React, { useEffect } from 'react';
import cloudy from './Icons/cloudy.svg';

const Temp = () => {
  const [inputCity, setInputCity] = React.useState("Ahmednagar");


  const getWeather = async () => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=2d9f020388f73c365b0cc6457b04233e`);
      let data = await response.json();
      // console.log(data);
      const { temp, humidity } = data.main;
      const name = data.name;
      const { sunrise, sunset } = data.sys;
      console.log(temp, humidity, name, sunrise, sunset);



    }
    catch (err) {
      console.log("Not found");
    }
  }

  useEffect(() => {
    getWeather();
  }, [])


  return (
    <>
      <div className="main-div">
        <div className="search">
          <input type="text"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="Enter City Name" autoFocus="off" className='input-city' />
          <button onClick={getWeather} className='search-btn'>Search</button>
        </div>
      </div>

      <article className="widget">
        <div className="icon">
          <img src={cloudy} alt="" />
        </div>

        <div className="weather-info">
          <div className="temp">
            <span>25 &deg;</span>
          </div>

          <div className="description">
            <div className="weather-mood">Sunny</div>
            <div className="place">Pune, India</div>
          </div>
        </div>

        <div className="date">
          {new Date().toDateString()}
        </div>
      </article>
    </>
  )
}

export default Temp