import './DailyForecast.css'

function DailyForecast({ forecastDays }) {
  if (!forecastDays || forecastDays.length === 0) return null

  return (
    <div className="daily-forecast">
      <h2 className="section-title">Прогноз на {forecastDays.length} дней</h2>
      <div className="daily-list">
        {forecastDays.map((day, index) => {
          const dayDate = new Date(day.date_epoch * 1000)
          const dayName =
            index === 0
              ? 'Сегодня'
              : index === 1
              ? 'Завтра'
              : dayDate.toLocaleDateString('ru-RU', { weekday: 'long' })

          return (
            <div key={index} className="day-item">
              <div className="day-name">{dayName}</div>
              <img
                src={`https:${day.day.condition.icon}`}
                alt={day.day.condition.text}
                className="day-icon"
              />
              <div className="day-condition">{day.day.condition.text}</div>
              <div className="day-temps">
                <span className="day-max">
                  {Math.round(day.day.maxtemp_c)}°
                </span>
                <span className="day-min">
                  {Math.round(day.day.mintemp_c)}°
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DailyForecast
