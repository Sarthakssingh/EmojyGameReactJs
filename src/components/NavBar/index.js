// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameEnd} = props
  return (
    <div className="navbar-container">
      <div className="logo-title-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-title">Emoji Game</h1>
      </div>
      {!isGameEnd && (
        <div className="Score-container">
          <p className="score-label">Score: {score}</p>
          <p className="score-label">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
