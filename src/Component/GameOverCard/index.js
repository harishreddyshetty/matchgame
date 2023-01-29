import './index.css'

const GameOverCard = props => {
  const {score, startGame} = props

  const onClickStartGame = () => {
    startGame()
  }

  return (
    <div className="game-card-bg">
      <img
        className="trophy"
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p className="your-score-text">YOUR SCORE</p>
      <p className="final-score">{score}</p>
      <button
        onClick={onClickStartGame}
        type="button"
        className="play-again-btn"
      >
        <img
          className="reset-img"
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        />
        <p className="play-again-text"> PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default GameOverCard
