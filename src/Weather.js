import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecastFive from "./WeatherForecastFive"
import "./Weather.css";


export default function Weather(props) {
  let [temperature, setTemperature] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setTemperature({
      ready: true,
      coordinate: response.data.coord,
      data: new Date(response.data.dt * 100),
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      urlImg: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ad1bf417b741b444ec3593d62d14175&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (temperature.ready) {
    return (
      <div className="Weather">
        <div className="conteiner">
          <div className="weather__search">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    onChange={handleCity}
                    type="search"
                    placeholder="Enter a city..."
                  />
                </div>
                <div className="col-3">
                  <input type="submit" value="Search" onSubmit={handleSubmit} />
                </div>
              </div>
            </form>
          </div>
          <WeatherInfo inf={temperature} />
          <WeatherForecastFive icon={temperature} coordinate={temperature.coordinate} />
        </div>
      </div>
    );
  } else {
    search();
    return <h2>Loading...</h2>;
  }
}
