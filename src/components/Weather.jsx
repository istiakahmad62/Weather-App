import React, { Component } from "react";
import WeatherInfoApi from "../api/weatherInfoApi";
import WeatherIcon from "./WeatherIcon";
import timeFormat from "../lib/TimeFormat"
import '../weather.css'

const weatherInfo = new WeatherInfoApi()

class Weather extends Component {
    state = {
        temperature: 0,
        query: 'Dhaka',
        country: '',
        weather: {},
    }

    getWeatherData = async () => {
        try {
            const { query } = this.state
            const cityName = `${query[0].toUpperCase()}${query.slice(1)}`
            // api call
            const message = await weatherInfo.getApiCall({ cityName })
            const { weather, main, sys, name } = message
    
            this.setState({ 
                temperature: main.feels_like,
                country: name + " " + sys.country,
                weather: weather[0],
            })
    
            console.log(message)
    
        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.getWeatherData()
        this.setState({
            query: ''
        })
    }

    changeInput = (e) => {
        this.setState({
            query: e.target.value,
        })
        console.log(e.target.value)
    }

    pressElement = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            this.getWeatherData()
            this.setState({
                query: ''
            })
        }
    }

    render() {
        const { temperature, weather, country, query } = this.state

        const isWarm = temperature > 20

        return (
            <div className={isWarm ? "weather-app-warm" : "weather-app"}>
                <main>
                    <div className="search-box">
                        <input 
                            className="search-tab" 
                            type="text"
                            placeholder="Search..." 
                            value={query}
                            onChange={this.changeInput}
                            onKeyDown={this.pressElement}
                        />
                    </div>
                    <div className="weather-info">
                        <div className="place">
                            <p>Weather in {country}</p>
                        </div>
                        <div className="time">
                            <p>{timeFormat(new Date())}</p>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                <p>{Math.round(temperature)}<span>&#8451;</span></p>
                            </div>
                        </div>
                        <WeatherIcon weather={weather} />
                    </div>
                </main>
            </div>
        )
    }
}

export default Weather