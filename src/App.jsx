import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import TodayForecast from './components/TodayForecast'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'
import Loading from './components/Loading'
import Error from './components/Error'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const apiKey = "1802be02fa774d26a88172438252212"

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Dushanbe&days=7`
        const res = await fetch(url)
        
        if (!res.ok) {
          throw new Error('Ошибка загрузки данных')
        }
        
        const data = await res.json()
        setWeatherData(data)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Ошибка:', err)
      } finally {
         setLoading(false)
      }
    }
    fetchWeather()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error || !weatherData) {
    return <Error message={error} />
  }

  const { location, current, forecast } = weatherData
  const todayForecast = forecast?.forecastday?.[0]

  return (
    <>
        <div className="app">
      <div className="container">
        <Header location={location} />
        <CurrentWeather current={current} />
        {todayForecast && <TodayForecast forecast={todayForecast} />}
        {todayForecast?.hour && <HourlyForecast hours={todayForecast.hour} />}
        {forecast?.forecastday && (
          <DailyForecast forecastDays={forecast.forecastday} />
        )}
      </div>
    </div>
    </>

  )
}

export default App