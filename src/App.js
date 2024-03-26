import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import AlbumDetails from './components/AlbumDetails'
import CategoryPlaylistsDetails from './components/CategoryPlaylistsDetails'
import PlaylistDetails from './components/PlaylistDetails'
import NotFound from './components/NotFound'
// write your code here
const App = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/album/:id">
      <AlbumDetails />
    </Route>
    <Route exact path="/category/:id/playlists">
      <CategoryPlaylistsDetails />
    </Route>
    <Route exact path="/playlist/:id">
      <PlaylistDetails />
    </Route>
    <Route exact path="*">
      <NotFound />
    </Route>
  </Switch>
)

export default App
