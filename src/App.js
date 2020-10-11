import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import WeatherApi from './components/WeatherApi';




function App() {
  return (
    <div className="app">
      <WeatherApi/>
    </div>
  );
}

export default App;
