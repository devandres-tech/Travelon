import React from 'react';

export default function WeatherDetail(props) {
  return (
    <div className="weather-container">
      <p>Date: {props.date}</p>
      <h1>Temp: {props.temp}</h1>
    </div>
  )
}
