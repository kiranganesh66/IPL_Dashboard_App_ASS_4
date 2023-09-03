// Write your code here=
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  state = {teamCardList: []}

  componentDidMount() {
    this.teamCard()
  }

  teamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateDate = teams.map(eachOne => ({
      name: eachOne.name,
      id: eachOne.id,
      teamImageUrl: eachOne.team_image_url,
    }))
    this.setState({teamCardList: updateDate})
  }

  teamCardlist = eachOne => {
    const {name, teamImageUrl} = eachOne

    return (
      <div className="team-Card-CONT">
        <div className="g">
          <img className="team-Card-img" alt="logo" src={teamImageUrl} />
        </div>

        <div className="n">
          <h1 className="team-Card-Head">{name}</h1>
        </div>
      </div>
    )
  }

  render() {
    const {teamCardList} = this.state
    return <>{teamCardList.map(eachOne => this.teamCardlist(eachOne))}</>
  }
}

export default TeamCard
