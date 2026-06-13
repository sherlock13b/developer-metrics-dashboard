import React, { useState, useEffect } from 'react';
import '../styles/weather.css';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        // Simulating highly optimized structural API data pipeline processing
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({
            data: { temp: 32, condition: 'Clear Sky', location: 'Nellore, India', humidity: '58%' }
          }), 1200)
        );
        setWeather(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div className="weather-card loading">Synchronizing data infrastructure status...</div>;
  if (error) return <div className="weather-card error">{error}</div>;

  return (
    <div className="weather-card">
      <div className="weather-main">
        <h3>{weather.location}</h3>
        <span className="weather-temp">{weather.temp}°C</span>
      </div>
      <div className="weather-details">
        <p>Condition: <strong>{weather.condition}</strong></p>
        <p>Humidity: <strong>{weather.humidity}</strong></p>
      </div>
    </div>
  );
}

export default WeatherWidget;