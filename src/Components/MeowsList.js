import React, { Component } from "react"
import { connect } from "react-redux"

// Comps
import Meows from "./Meows"

class MeowsList extends Component {

  state = { displayMeowedPolls: false }

  render() {
    const { pollsIDs, meowedPollsIDs } = this.props
    const { displayMeowedPolls } = this.state

    const IDs = displayMeowedPolls ? pollsIDs.filter(function (id) {
      return meowedPollsIDs.includes(id)
    })
      :
      pollsIDs.filter(function (id) {
        return !meowedPollsIDs.includes(id)
      })

    return (
      <div className="pollList">

        <button className={displayMeowedPolls ? "none" : "focus"}
          onClick={() => {
            return this.setState({ displayMeowedPolls: true })
          }}> Meowed Polls </button>

        <button className={displayMeowedPolls ? "focus" : "none"}
          onClick={() => {
            return this.setState({ displayMeowedPolls: false })
          }}> Not Meowed Polls </button>

        <ul className="NoMeowsMessage">

          {IDs.length < 1 ? <p className="bT">No Polls Meowed</p> : IDs.map(function (id) {
            return (
              <li key={id}> <Meows id={id} /> </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ AuthorizedMeower, meowers, meowerPolls }) {
  return {
    pollsIDs: Object.keys(meowerPolls)
      .sort(function (x, y) {
        return meowerPolls[y].timestamp - meowerPolls[x].timestamp
      }),
    meowedPollsIDs: meowers[AuthorizedMeower] ? Object.keys(meowers[AuthorizedMeower].meows) : []
  }
}

export default connect(mapStateToProps)(MeowsList)