import React, { Component } from "react"
import { connect } from "react-redux"

// Actions
import { handleStorePollMeow } from "../Actions/shared"

class Poll extends Component {

  state = {
    option: "none", showAlert: false,
  }

  handleChange(hc) {
    this.setState({
      option: hc.target.value, showAlert: false,
    })
  }

  handleSubmit(hs) {
    hs.preventDefault()
    const { option } = this.state
    const { dispatch, meowersPoll } = this.props
    this.state.option === "none" ?
      this.setState({ showAlert: true }) : dispatch(handleStorePollMeow(meowersPoll.id, option))
  }

  render() {
    const { meower, meowersPoll } = this.props

    return (
      <div className="poll">
        <p className="meowerpoll">{meower.name} Meows:</p>
        <div className="pollBox">
          <img
            src={meower.kittyPic} alt={"PFP of " + meower}
          />
          <div>
            <p>Would You Rather</p>

            <form
              onChange={m => { return this.handleChange(m) }}
              onSubmit={m => { return this.handleSubmit(m) }}>

              <div>
                <input className="optionButton" type="radio" name="option" value="firstOption" />
                <p className="options">{meowersPoll.firstOption.text}</p>
              </div>

              <div>
                <input className="optionButton" type="radio" name="option" value="secondOption" />
                <p className="options">{meowersPoll.secondOption.text}</p>
              </div>

              {this.state.showAlert && <p>Please choose one of the options before you Meow.</p>}

              <button className="submit" type="submit"> Meow </button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Poll)