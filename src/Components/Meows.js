import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// Utils
import { formatDate } from "../Utilities/helpers"

class Meows extends Component {

  render() {
    const { meowerPoll, meower } = this.props

    return (
      <div className="poll">
        <p className="meowerpoll">{meower.name} Meows:</p>

        <div className="pollBox">
          <img src={meower.kittyPic} alt={"Avatar of " + meower} />

          <div className="pollOption">
            <p className="bT">Would You Rather:</p>
            <p className="bT">{meowerPoll.firstOption.text}</p>
            <p className="bT">(OR)</p>
            <p className="bT">{meowerPoll.secondOption.text}?</p>
            <p className="bT"><Link to={"/poll/" + meowerPoll.id}>Meow</Link></p>
            <p className="bT">{formatDate(meowerPoll.timestamp)}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ meowers, meowerPolls }, { id }) {
  const meowerPoll = meowerPolls[id]

  return {
    meowerPoll: meowerPoll,
    meower: meowers[meowerPoll.meower]

  }
}

export default connect(mapStateToProps)(Meows)