import React from "react"

export default function WeatherForecastDay(props){

    function maxTemp(){
        let maxTemp=Math.round(props.forecast.temp.max);
        return`${maxTemp}`;
    }
    function minTemp(){
        let minTemp = Math.round(props.forecast.temp.min);
        return `${minTemp}`;
    }

    function date (){
        let date = new Date(props.forecast.dt *1000)
        let day = date.getDay()
        let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return (days[day])
    }
    console.log(props)
    return (
      <div>
        <p> {date()} </p>
        <img src={props.forecast.weather[0].icon} alt="Weather" />
        <p>
          <span className="maxTemp">{maxTemp()}°</span>{" "}
          <span className="minTemp">{minTemp()}°</span>{" "}
        </p>
      </div>
    );
}