import React, { Component } from "react"
import { connect } from "react-redux"

// Comps
import Poll from "./Poll"
import PollData from "./PollData"

class MeowsFinder extends Component {

  render() {
    const { AuthorizedMeower, meowers, meowersPoll } = this.props

    if (!meowersPoll) {
      return (<p className="Mnotfound">Meow Not Found</p>)

    } else if (!AuthorizedMeower) {
      return (<p className="MeowInMessage">MeowIn to continue</p>)
    }

    const questionAnswered = Object.keys(meowers[AuthorizedMeower].meows).includes(meowersPoll.id)

    return (
      <div>
        {questionAnswered ?
          <PollData meowersPoll={meowersPoll} meower={meowers[meowersPoll.meower]} AuthorizedMeower={AuthorizedMeower} />
          :
          <Poll meowersPoll={meowersPoll} meower={meowers[meowersPoll.meower]} />
        }
      </div>
    )
  }
}

function mapStateToProps({ AuthorizedMeower, meowers, meowerPolls }, props) {
  return ({
    AuthorizedMeower, meowers, meowersPoll: meowerPolls[props.match.params.id]
  })
}

export default connect(mapStateToProps)(MeowsFinder)