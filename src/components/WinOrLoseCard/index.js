// Write your code here.

import './index.css'

const winImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const imageUrl = isWon ? winImg : loseImg
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="text-btn-container">
        <h1 className="win-text">{gameStatus}</h1>
        <p className="best-score-text">{scoreText}</p>
        <p className="no-text">{score}/12</p>
        <button onClick={onClickPlayAgain} type="button" className="play-btn">
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
