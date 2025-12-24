import './CurrentWeather.css'
import WeatherDetails from './WeatherDetails'

function CurrentWeather({ current }) {
  if (!current) return null

  return (
    <div className="current-weather">
      <div className="weather-main">
        <div className="temperature-section">
          <div className="temp-value">{Math.round(current.temp_c)}°</div>
          <div className="temp-feels">
            Ощущается как {Math.round(current.feelslike_c)}°
          </div>
        </div>
        <div className="condition-section">
          <img
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            className="weather-icon"
          />
          <div className="condition-text">{current.condition.text}</div>
        </div>
      </div>
      <WeatherDetails current={current} />
    </div>
  )
}

export default CurrentWeather
