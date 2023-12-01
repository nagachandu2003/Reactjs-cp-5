import {Component} from 'react'
import './index.css'
import Logout from '../Logout'

class Login extends Component {
  render() {
    const {func} = this.props
    const {status} = this.props
    const isLoggedIn = status
    let authBtn
    if (!isLoggedIn)
      authBtn = (
        <button onClick={func} className="button" type="button">
          Login
        </button>
      )
    else authBtn = <Logout fun={func} />

    return <div> {authBtn}</div>
  }
}
export default Login
