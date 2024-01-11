import React, { Component } from 'react';
import './style.css'; // Import the CSS file for styling

class WeatherComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weatherData: null,
    };
    this.apiKey = 'ea1736c136msh0f5c187e704eedbp15d852jsn9c8eb45d2ffd';
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${this.state.city}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': this.apiKey,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ weatherData: data });
      } else {
        console.error('Error fetching weather data');
        this.setState({ weatherData: null });
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      this.setState({ weatherData: null });
    }
  };

  render() {
    const { city, weatherData } = this.state;

    return (
      <div className="weather-container">
        <h2>Weather Information</h2>
        <div className="input-container">
          <label htmlFor="city">Enter City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => this.setState({ city: e.target.value })}
            placeholder="E.g., salem"
          />
        </div>
        <button onClick={this.fetchData}>Get Weather</button>
        {weatherData && (
          <div className="weather-output">
            <h3>{weatherData.location.name}, {weatherData.location.country}</h3>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
          </div>
        )}
      </div>
    );
  }
}

export default WeatherComponentClass;