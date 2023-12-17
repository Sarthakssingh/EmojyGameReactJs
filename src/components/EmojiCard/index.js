// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {list, onClickEmoji} = props
  const {emojiUrl, emojiName, id} = list
  const onClickEmojiItem = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="button" onClick={onClickEmojiItem}>
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
