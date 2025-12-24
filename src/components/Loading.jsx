import './Loading.css'

function Loading() {
  return (
    <div className="app">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Загрузка погоды...</div>
      </div>
    </div>
  )
}

export default Loading
