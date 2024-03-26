import './common-card.css'

const CommonCard = ({data}) => {
  const playlistImage = data?.images ? data?.images[0]?.url : ''
  const categoryImage = data?.icons ? data?.icons[0]?.url : ''
  const name = data?.name
  console.log(data)
  return (
    <div className="card-container">
      {playlistImage && (
        <img
          alt="featured playlist"
          className="card-image"
          src={playlistImage}
        />
      )}
      {categoryImage && (
        <img alt="category" className="card-image" src={categoryImage} />
      )}
      {name && <p className="card-heading">{name}</p>}
    </div>
  )
}

export default CommonCard
