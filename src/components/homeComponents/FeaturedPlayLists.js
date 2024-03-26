import CommonCard from './CommonCard'
import './playlists-container.css'

const FeaturedPlayLists = ({data}) => (
  <div className="container">
    <h1 className="playlists-name">Editors Pick</h1>
    <div className="playlists-container">
      {data?.playlists?.items?.map(item => {
        const itemData = item
        return <CommonCard key={item?.id} data={itemData} />
      })}
    </div>
  </div>
)

export default FeaturedPlayLists
