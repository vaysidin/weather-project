import './WeatherDetails.css'

function WeatherDetails({ current }) {
  if (!current) return null

  const details = [
    {
      icon: '💨',
      label: 'Ветер',
      value: `${current.wind_kph} км/ч ${current.wind_dir}`,
    },
    {
      icon: '💧',
      label: 'Влажность',
      value: `${current.humidity}%`,
    },
    {
      icon: '📊',
      label: 'Давление',
      value: `${current.pressure_mb} мбар`,
    },
    {
      icon: '👁️',
      label: 'Видимость',
      value: `${current.vis_km} км`,
    },
    {
      icon: '☀️',
      label: 'UV индекс',
      value: current.uv,
    },
    {
      icon: '🌡️',
      label: 'Точка росы',
      value: `${current.dewpoint_c}°`,
    },
  ]

  return (
    <div className="weather-details">
      {details.map((detail, index) => (
        <div key={index} className="detail-card">
          <div className="detail-icon">{detail.icon}</div>
          <div className="detail-info">
            <div className="detail-label">{detail.label}</div>
            <div className="detail-value">{detail.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WeatherDetails
