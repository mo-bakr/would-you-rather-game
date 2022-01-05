import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

// Actions
import { handleCreatePoll } from "../Actions/shared"

class CreateMeow extends Component {

  state = {
    firstOption: "", secondOption: "", redirect: false,
  }

  handleSubmit = hs => {
    hs.preventDefault()
    const { firstOption, secondOption } = this.state
    const { createPoll } = this.props
    createPoll(firstOption, secondOption)
    this.setState({ redirect: true })
  }

  render() {

    const { kittyPic, name } = this.props
    const { firstOption, secondOption, redirect } = this.state

    if (redirect) {
      return <Redirect to="/" />
    }

    return (
      <div className="poll">
        <p className="meowerpoll">Would You Rather:</p>

        <div className="pollBox">
          <img src={kittyPic} alt={"PFP of " + name} />

          <form className="createPoll" onSubmit={this.handleSubmit}>
            <textarea
              placeholder="First Meow" value={firstOption}
              onChange={m => { return this.setState({ firstOption: m.target.value }) }}
              maxLength={50} />

            <p>OR</p>

            <textarea
              placeholder="Second Meow"
              value={secondOption}
              onChange={m => { return this.setState({ secondOption: m.target.value }) }}
              maxLength={50} />

            <button className="submit" type="submit"
              disabled={firstOption === "" || secondOption === ""}> Meow </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ AuthorizedMeower, meowers }) {
  return ({
    AuthorizedMeowerName: meowers[AuthorizedMeower].name,
    kittyPic: meowers[AuthorizedMeower].kittyPic,
  })
}
function mapDispatchToProps(dispatch) {
  return ({
    createPoll: function (first, second) {
      return dispatch(handleCreatePoll(first, second))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeow)