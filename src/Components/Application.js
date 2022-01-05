import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

// Actions
import { handleInitialData } from "../Actions/shared"

// Comps
import CatsMeowIn from "./CatsMeowIn"
import CreateMeow from "./CreateMeow"
import MeowsFinder from "./MeowsFinder"
import MeowsList from "./MeowsList"
import MeowsWall from "./MeowsWall"
import Navigation from "./Navigation"
import notfound from "./notfound"

let isMeowerMeowedIn = false
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={function (props) {
      return (isMeowerMeowedIn === true ?
        <Component {...props} /> : <p className="MeowInMessage">MeowIn to continue</p>)
    }} />
  )
}

class Application extends Component {

  componentDidMount() { this.props.dispatch(handleInitialData()) }

  render() {
    isMeowerMeowedIn = this.props.isMeowerMeowedIn
    return (
      <Router>
        <Fragment>
          <Navigation />
          {!this.props.loading && <div className="frame">
            <Switch>
              <PrivateRoute path="/" exact component={MeowsList} />
              <PrivateRoute path="/create" component={CreateMeow} />
              <PrivateRoute path="/meowswall" component={MeowsWall} />
              <Route path="/poll/:id" component={MeowsFinder} />
              <Route path="/meowIn" component={CatsMeowIn} />
              <Route path="/404" component={notfound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ meowerPolls, AuthorizedMeower }) {
  return ({
    loading: meowerPolls === null,
    isMeowerMeowedIn: AuthorizedMeower !== null,
  })
}

export default connect(mapStateToProps)(Application);