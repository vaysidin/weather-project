import './Header.css'

function Header({ location }) {
  if (!location) return null

  return (
    <header className="header">
      <h1 className="app-title">Погода</h1>
      <div className="location-info">
        <span className="location-name">{location.country}</span>
        <span className="location-region">
           {location.name}
        </span>
      </div>
    </header>
  )
}

export default Header
