// Write your code here.

import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props

  return (
    <nav className="nav-container">
      <div className="image-container">
        <img
          className="nav-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="score-text">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score-text">Score: {currentScore}</p>
          <p className="score-text">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
