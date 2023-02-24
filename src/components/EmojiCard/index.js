// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickedEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="button-emoji-img">
        <img
          onClick={onClickedEmoji}
          className="emoji-card-image"
          src={emojiUrl}
          alt={emojiName}
        />
      </button>
    </li>
  )
}

export default EmojiCard
