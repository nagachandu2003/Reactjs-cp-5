import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {status} = this.props
    return (
      <div>
        {!status && <h1 className="heading">Please Login</h1>}
        {status && <h1 className="heading">Welcome User</h1>}
      </div>
    )
  }
}
export default Message
