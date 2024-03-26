import Cookies from 'js-cookie'
import {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import FeaturedPlayLists from './homeComponents/FeaturedPlayLists'
import Categories from './homeComponents/Categories'
import Loading from './Loading'
import Header from './Header'
import Sidebar from './Sidebar'
import NewReleases from './homeComponents/NewReleases'
import './home.css'

const Home = () => {
  const cookie = Cookies.get('JWTTOKEN')
  const [isLoading, setIsLoading] = useState({
    featuredPlayLists: true,
    categories: true,
    newReleases: true,
  })
  const [error, setError] = useState('')
  const [featuredPlayLists, setFeaturedPlayLists] = useState([])
  const [categories, setCategories] = useState([])
  const [newReleases, setNewReleases] = useState([])
  console.log(featuredPlayLists, categories, newReleases)
  const fetchFeaturedPlayLists = () => {
    const url = 'https://apis2.ccbp.in/spotify-clone/featured-playlists'
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        setIsLoading(prevState => ({...prevState, featuredPlayLists: false}))
        setFeaturedPlayLists(jsonData)
      })
      .catch(err => {
        setIsLoading(prevState => ({...prevState, featuredPlayLists: false}))
        setError(JSON.stringify(err))
      })
  }
  const fetchCategories = () => {
    const url = 'https://apis2.ccbp.in/spotify-clone/categories'
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        setIsLoading(prevState => ({...prevState, categories: false}))
        setCategories(jsonData)
      })
      .catch(err => {
        setIsLoading(prevState => ({...prevState, categories: false}))
        setError(JSON.stringify(err))
      })
  }
  const fetchNewReleases = () => {
    const url = 'https://apis2.ccbp.in/spotify-clone/new-releases'
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        setIsLoading(prevState => ({...prevState, newReleases: false}))
        setNewReleases(jsonData)
      })
      .catch(err => {
        setIsLoading(prevState => ({...prevState, newReleases: false}))
        setError(JSON.stringify(err))
      })
  }
  useEffect(() => {
    fetchFeaturedPlayLists()
    fetchCategories()
    fetchNewReleases()
  }, [])

  if (cookie) {
    const isLoadingCondition =
      !isLoading.featuredPlayLists &&
      !isLoading.categories &&
      !isLoading.newReleases
    return (
      <>
        {isLoadingCondition ? (
          <div className="bg">
            <Sidebar />
            <div>
              <FeaturedPlayLists data={featuredPlayLists} />
              <Categories data={categories} />
              <NewReleases data={newReleases} />
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </>
    )
  }
  return <Redirect to="/login" />
}

export default Home
