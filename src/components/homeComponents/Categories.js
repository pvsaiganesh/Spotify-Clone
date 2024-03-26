import CommonCard from './CommonCard'
import './playlists-container.css'

const Categories = ({data}) => {
  const c = 'c'
  return (
    <div className="container">
      <h1 className="playlists-name">Moods and Genres</h1>
      <div className="playlists-container">
        {data?.categories?.items?.map(item => {
          const itemData = item
          return <CommonCard data={itemData} />
        })}
      </div>
    </div>
  )
}

export default Categories
