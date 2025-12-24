import './HourlyForecast.css'

function HourlyForecast({ hours }) {
  if (!hours || hours.length === 0) return null

  return (
    <div className="hourly-forecast">
      <h2 className="section-title">Почасовой прогноз</h2>
      <div className="hourly-scroll">
        {hours.slice(0, 24).map((hour, index) => {
          const hourDate = new Date(hour.time_epoch * 1000)
          const hourTime = hourDate.getHours()
          const displayTime = hourTime === 0 ? '00:00' : `${hourTime}:00`

          return (
            <div key={index} className="hour-item">
              <div className="hour-time">{displayTime}</div>
              <img
                src={`https:${hour.condition.icon}`}
                alt={hour.condition.text}
                className="hour-icon"
              />
              <div className="hour-temp">{Math.round(hour.temp_c)}°</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HourlyForecast
