import React from "react";
import CurrentData from "./CurrentData";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather__today">
        <div className="weather__today__city">
          <h1>
            {props.inf.city}, {props.inf.country}
          </h1>
          <ul>
            <li>
              <CurrentData date={props.inf.data} />
            </li>
            <li className="text-capitalize">{props.inf.description}</li>
          </ul>
        </div>
        <div className="row weather__today__inf">
          <div className="col-6">
            <img src={props.inf.urlImg} alt="Weather" />
            <WeatherTemperature celsius={props.inf.temperature} />
          </div>
          <div className="col-6 weather__today__inf2">
            <ul>
              <li>Humidity: {props.inf.humidity}%</li>
              <li>Wind: {props.inf.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
