import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  state = {countdown: 60}

  //   componentDidMount() {
  //     this.timerID = setInterval(this.timer, 1000)
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.timerID)
  //   }

  //   timer = () => {
  //     this.setState(prevState => ({countdown: prevState.countdown - 1}))
  //   }

  render() {
    const {countdown} = this.state
    const {score} = this.props

    return (
      <nav className="nav-bar">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        />
        <div className="score-timer-container">
          <p className="score-text">
            score: <span className="current-score">{score}</span>
          </p>
          <div className="timer-container">
            <img
              className="timer-img"
              alt="timer"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            />
            <p className="count-down-time">{countdown}</p>
            <p className="seconds">sec</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
