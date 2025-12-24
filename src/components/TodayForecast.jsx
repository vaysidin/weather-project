import './TodayForecast.css'

function TodayForecast({ forecast }) {
  if (!forecast) return null

  return (
    <div className="today-forecast">
      <h2 className="section-title">Сегодня</h2>
      <div className="today-info">
        <div className="today-temp-range">
          <span className="temp-max">
            ↑ {Math.round(forecast.day.maxtemp_c)}°
          </span>
          <span className="temp-min">
            ↓ {Math.round(forecast.day.mintemp_c)}°
          </span>
        </div>
        <div className="today-astro">
          <div className="astro-item">
            <span>🌅</span>
            <span>{forecast.astro.sunrise}</span>
          </div>
          <div className="astro-item">
            <span>🌇</span>
            <span>{forecast.astro.sunset}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodayForecast
