import './side-bar.css'
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'

const Sidebar = () => {
  const history = useHistory()
  return (
    <div className="sidebar-container">
      <div className="app-logo-homepage">
        <img
          src="https://res.cloudinary.com/pvsaiganesh/image/upload/v1711207630/qsg0vzn5kpvs9wdxn7ek.png"
          className="app-logo"
          alt="login website logo"
          onClick={() => {
            history.push('/')
          }}
        />
      </div>
      <div className="logout-container">
        <img
          src="https://res.cloudinary.com/pvsaiganesh/image/upload/v1711454872/jpz0nhk5uid5bhx6ys0o.png"
          className="app-logo"
          alt="login website logo"
          onClick={() => {
            Cookies.remove('JWTTOKEN')
            history.push('/login')
          }}
        />
      </div>
    </div>
  )
}

export default Sidebar
