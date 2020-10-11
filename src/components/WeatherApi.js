import React, { Component } from 'react'
import Form from './Form'
import Weather from './Weather'

// const API_key = "1693cc8c0789b1c6c0577bd0336a138e"


class WeatherApi extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            city: "",
            country: "",
            icon: "",
            main: "",
            celsius: "",
            temp_max: "",
            temp_min: "",
            description: "",
            error: false
             
        }

        this.weatherIcon = {
            Thunderstorm : "wi-thunderstorm",
            Drizzle : "wi-sleet",
            Rain : "wi-storm-showers",
            Snow : "wi-snow",
            Atomsphere : "wi-fog",
            Clear : "wi-day-sunny",
            Clouds : "wi-day-fog"
        }; 
          
    }

    getWeather = async e => {
        e.preventDefault();
    
        const country = e.target.elements.country.value;
        const city = e.target.elements.city.value;
    
        if (country && city) {
          const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${"1693cc8c0789b1c6c0577bd0336a138e"}`
          );
    
          const response = await api_call.json();
    
          this.setState({
            city: `${response.name}, ${response.sys.country}`,
            main: response.weather[0].main,
            celsius: this.calCelsius(response.main.temp),
            temp_max: this.calCelsius(response.main.temp_max),
            temp_min: this.calCelsius(response.main.temp_min),
            description: response.weather[0].description,
            error: false
          });
    
          // seting icons
          this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    
          console.log(response);
        } else {
          this.setState({
            error: true
          });
        }
      };

    get_WeatherIcon(icons, rangeId) {
        switch(true){
            case rangeId>= 200 && rangeId<=232:
                this.setState({icon: this.weatherIcon.Thunderstorm})
                break
            case rangeId>= 300 && rangeId<=321:
                this.setState({icon: this.weatherIcon.Drizzle})
                break
            case rangeId>= 500 && rangeId<=531:
                this.setState({icon: this.weatherIcon.Rain})
                break
            case rangeId>= 600 && rangeId<=622:
                this.setState({icon: this.weatherIcon.Snow})
                break
            case rangeId>= 700 && rangeId<=781:
                this.setState({icon: this.weatherIcon.Atomsphere})
                break
            case rangeId===800:
                this.setState({icon: this.weatherIcon.Clear})
                break
            case rangeId>= 801 && rangeId<=804:
                this.setState({icon: this.weatherIcon.Clouds})
                break
            default:
                this.setState({icon: this.weatherIcon.Clouds})
        }
    }
    

    calCelsius(temp){
        let cell = Math.floor(temp-273.15)
        return cell;
    }

    render() {
        return (
            <>
                <Form loadweather={this.getWeather} error={this.state.error}/>
                <Weather
                    city={this.state.city} 
                    country={this.state.country}
                    temp_celsius={this.state.celsius}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    description={this.state.description}
                    weatherIcon={this.state.icon}
                />
            </>
        )
    }
}

export default WeatherApi

