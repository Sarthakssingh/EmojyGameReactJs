/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
} 

*/

// Write your code here.
import {Component} from 'react'

import './index.css'
// import {v4 as uuidv4} from 'uuid'
import NavBar from '../NavBar/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import EmojiCard from '../EmojiCard/index'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameEnd: false,
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore, isGameEnd: true})
    }
  }

  restartGame = () => {
    this.setState({clickedEmojis: [], isGameEnd: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = emojisList.length === clickedEmojis.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmojis.length}
      />
    )
  }

  render() {
    const list = this.shuffledEmojisList()
    const {clickedEmojis, topScore, isGameEnd} = this.state
    return (
      <div className="app-container">
        <NavBar
          score={clickedEmojis.length}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
        <div className="emoji-body-container">
          {isGameEnd ? (
            this.renderWinOrLose()
          ) : (
            <ul className="emoji-list">
              {list.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  list={eachItem}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
