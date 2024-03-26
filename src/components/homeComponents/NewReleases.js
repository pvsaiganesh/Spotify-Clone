import CommonCard from './CommonCard'

const NewReleases = ({data}) => {
  const c = 'c'
  return (
    <div className="container">
      <h1 className="playlists-name">New Releases</h1>
      <div className="playlists-container">
        {data?.albums?.items?.map(item => {
          const itemData = item
          return <CommonCard data={itemData} />
        })}
      </div>
    </div>
  )
}
export default NewReleases
