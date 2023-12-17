// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, onClickPlayAgain} = props
  return (
    <div className="winOrLose-container">
      <div className="winOrLose-text-container">
        <h1 className="winOrLose-status">{isWon ? 'You Won' : 'You Lose'}</h1>
        <p className="winOrLose-label">{isWon ? 'Best Score' : 'Score'}</p>
        <p className="winOrLose-current-score">{score}/12</p>
        <button
          className="winOrLose-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="winOrLose-image-container">
        <img
          className="win-or-lose-image"
          src={
            isWon
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
