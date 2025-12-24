import './Error.css'

function Error({ message }) {
  return (
    <div className="app">
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <div className="error-text">
          Ошибка: {message || 'Не удалось загрузить данные'}
        </div>
      </div>
    </div>
  )
}

export default Error
