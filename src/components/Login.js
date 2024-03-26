import {useState, useEffect} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './login.css'
import Loading from './Loading'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const jwtToken = Cookies.get('JWTTOKEN')
  const history = useHistory()
  if (jwtToken) {
    return <Redirect to="/" />
  }
  const onSubmit = async event => {
    event.preventDefault()
    const type = 'POST'
    const url = 'https://apis.ccbp.in/login'
    const query = {
      username,
      password,
    }
    const options = {
      method: type,
      body: JSON.stringify(query),
    }

    await fetch(url, options)
      .then(response => response.json())
      .then(jsonData => {
        if (jsonData.error_msg) {
          Cookies.remove('JWTTOKEN')
          setError(jsonData.error_msg)
        } else {
          Cookies.set('JWTTOKEN', jsonData.jwt_token)
          history.push('/')
          setError('')
        }
      })
      .catch(err => {
        Cookies.remove('JWTTOKEN')
        setError(JSON.stringify(err))
      })
  }

  return (
    <div className="bg-image">
      <div className="login-box">
        <div className="app-container">
          <img
            src="https://res.cloudinary.com/pvsaiganesh/image/upload/v1711207630/qsg0vzn5kpvs9wdxn7ek.png"
            className="app-logo"
            alt="login website logo"
          />
          <h1 className="app-name">Spotify Clone</h1>
        </div>
        <form className="login-form-container">
          <label className="login-label" htmlFor="username">
            Username
          </label>
          <input
            className="login-input"
            id="username"
            data-testid="username"
            type="text"
            onChange={e => {
              setUserName(e.target.value)
            }}
          />
          <label className="login-label" htmlFor="password">
            Password
          </label>
          <input
            className="login-input"
            data-testid="password"
            id="password"
            type="password"
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" onClick={onSubmit} className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
