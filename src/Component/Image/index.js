import './index.css'

const Image = props => {
  const {imageUrl} = props

  return (
    <div className="image-section">
      <img className="image" alt="match" src={imageUrl} />
    </div>
  )
}

export default Image
