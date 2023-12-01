import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onLog = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg">
        <div className="innerbg">
          <div>
            <Message status={isLoggedIn} />
            <Login status={isLoggedIn} func={this.onLog} />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
