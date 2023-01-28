import './index.css'

const ImagesComponent = props => {
  const {imageDetails, changeImage} = props
  const {thumbnailUrl, id} = imageDetails

  const OnClickChangeImage = () => {
    changeImage(id)
  }

  return (
    <li className="Image-list-element">
      <button onClick={OnClickChangeImage} type="button" className="btn">
        <img className="small-image" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImagesComponent
