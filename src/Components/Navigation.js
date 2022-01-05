import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

//Actions
import { setAuthorizedMeower } from "../Actions/AuthorizedMeower"

function Navigation({ AuthorizedMeower, AuthorizedMeowerName, meowOut }) {

  const links = [
    ["/", "Home"],
    ["/create", "Create a Poll"],
    ["/meowswall", "Meows Wall"],
  ]

  return (
    <div className="navigation">
      <ul>
        {links.map(function (link) {
          return (
            <li key={link[1]}><Link to={link[0]}>{link[1]}</Link></li>
          )
        })}

        {AuthorizedMeower ?
          <Fragment>
            <li>

              <Link to="/meowIn" onClick={function () {
                return meowOut()
              }}>MeowOut
              </Link>
            </li>

            <li>{AuthorizedMeowerName}</li>
          </Fragment> : <li>
            <Link to="/meowIn"> MeowIn </Link>
          </li>}
      </ul>
    </div>
  )
}

function mapStateToProps({ AuthorizedMeower, meowers }) {
  return ({
    AuthorizedMeower, AuthorizedMeowerName: AuthorizedMeower && meowers[AuthorizedMeower] ?
      meowers[AuthorizedMeower].name : null
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    meowOut: function () {
      return dispatch(setAuthorizedMeower(null))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)