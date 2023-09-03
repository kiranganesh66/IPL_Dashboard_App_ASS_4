import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="ipl-Dash-home-COnt">
        <div className="ipl-D-Heading-COnt">
          <img
            className="ipl-D-Logo"
            alt="log"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="ipl-D-Heading">IPL Dashboard</h1>
        </div>

        <div className="ipl-TeamC-CONT">
          <TeamCard />
        </div>
      </div>
    )
  }
}

export default Home
