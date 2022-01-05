import React, { Component } from "react"
import { connect } from "react-redux"

class PollData extends Component {

  render() {
    const { AuthorizedMeower, meower, meowersPoll } = this.props
    const { firstOption, secondOption } = meowersPoll
    const totalMeows = firstOption.meows.length + secondOption.meows.length
    const selected = firstOption.meows.includes(AuthorizedMeower)

    return (
      <div className="poll">
        <p className="meowerpoll">Meowed by {meower.name}</p>

        <div className="pollBox">
          <img src={meower.kittyPic} alt={"Avatar of " + meower.name} />

          <div className="pollOption">
            <p>Results:</p>
            <div className={"pollResult " + selected}>

              <p>{firstOption.text}</p>
              <p>{(firstOption.meows.length / totalMeows * 100).toFixed(0) + "%"}</p>
              <p>{firstOption.meows.length + " out of " + totalMeows + " meows"}</p>

            </div>
            <div className={"pollResult " + !selected}>
              <p>{secondOption.text}</p>
              <p>{(secondOption.meows.length / totalMeows * 100).toFixed(0) + "%"}</p>
              <p>{secondOption.meows.length + " out of " + totalMeows + " meows"}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(PollData)