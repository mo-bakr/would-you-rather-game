import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

// Actions
import { setAuthorizedMeower } from "../Actions/AuthorizedMeower"

class CatsMeowIn extends Component {

  state = { redirect: false, }
  handleClick(id) {
    this.props.meowIn(id)
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    const { meowers } = this.props
    return (
      <ul className="meowerMeowInData">
        {Object.keys(meowers).map(id => {
          const { kittyPic, name } = meowers[id]

          return (
            <li key={id}>
              <img src={kittyPic} alt={"PFP of " + name} />
              <p>{name}</p>
              <button onClick={() => {
                return this.handleClick(id)
              }}>
                MeowIn with {id}</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

function mapStateToProps({ meowers }) {
  return ({ meowers })
}

function mapDispatchToProps(dispatch) {
  return ({
    meowIn: function (id) {
      return dispatch(setAuthorizedMeower(id))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CatsMeowIn)