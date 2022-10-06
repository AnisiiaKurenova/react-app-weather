import React, {useState} from "react"
import "./WeatherForecastFive.css"
import WeatherForecastDay from "./WeatherForecastDay"
import axios from "axios";

export default function WeatherForecastFive(props){
let [loaded, setLoaded]=useState(false)
let [forecast, setForecast] = useState (null)
    function handleResponse(response){
        setLoaded(true)
        setForecast(response.data.daily)
    }

    if(loaded){
      return(
        <div className="WeatherForecastFive">
    <div className="row">
          <div className="col">
      <WeatherForecastDay forecast={forecast[0]} />
    </div>
    </div>
      </div>
      )
    } else {
    
    let lat= props.coordinate.lat
    let lon= props.coordinate.lon
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=7ad1bf417b741b444ec3593d62d14175&units=metric`;
    axios.get(apiUrl).then(handleResponse)
    
    return null;
}
}