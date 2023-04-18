import './index.css'

const Navbar = props => {
  const {score, countdown} = props

  return (
    <nav className="nav-bar">
      <img
        className="website-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <ul className="score-timer-container">
        <li>
          <p className="score-text">
            Score: <span className="current-score">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            className="timer-img"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />

          <p className="count-down-time">{countdown} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

// <span className="seconds">sec</span>
