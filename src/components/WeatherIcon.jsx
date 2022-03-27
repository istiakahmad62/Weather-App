import React from "react";
import endPoint from "../api/endPoint";
import '../weather.css'

function WeatherIcon({ weather }) {
    const { icon, description } = weather
    const imgSrc = `${endPoint.icon.url}/${icon}@2x.png`

    console.log('Weather icon rendered')

    return (
        <div className="weather-icon">
            <div className="description">
                <p>{description}</p>
            </div>
            <img className="icon" src={imgSrc} alt="icon" />
        </div>
    )
}

export default WeatherIcon