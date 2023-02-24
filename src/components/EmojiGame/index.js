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
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  onResetGame = () => {
    this.setState({
      clickedEmojiList: [],
      isGameInProgress: true,
    })
  }

  renderScore = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = emojisList.length === clickedEmojiList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojiList.length}
        onClickPlayAgain={this.onResetGame}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  clickEmoji = id => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojiListLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojiList()

    return (
      <ul className="emoji-cards">
        {shuffledEmojiList.map(eachItem => (
          <EmojiCard
            key={eachItem.id}
            emojiDetails={eachItem}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, topScore, clickedEmojiList} = this.state
    return (
      <>
        <NavBar
          isGameInProgress={isGameInProgress}
          topScore={topScore}
          currentScore={clickedEmojiList.length}
        />

        <div className="emojis-game-container">
          {isGameInProgress ? this.renderEmojiList() : this.renderScore()}
        </div>
      </>
    )
  }
}

export default EmojiGame
