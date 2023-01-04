import React from 'react';
import cloudy from './Icons/cloudy.svg'

const Temp = () => {


  return (
    <>
      <div className="main-div">
        <div className="search">
          <input type="text" placeholder="Enter City Name" autoFocus="off" className='input-city' />
          <button className='search-btn'>Search</button>
        </div>
      </div>

      <articles className="widget">
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
      </articles>
    </>
  )
}

export default Temp