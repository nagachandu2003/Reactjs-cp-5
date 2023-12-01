import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {fun} = this.props
    return (
      <button onClick={fun} className="button" type="button">
        Logout
      </button>
    )
  }
}
export default Logout
