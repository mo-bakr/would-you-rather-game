import { _getMeowers, _getPolls, _savePoll, _savePollMeow } from "../Utilities/_DATA"
import { receiveMeowers, addPollToAuthorizedMeower, savePollMeowToAuthorizedMeower } from "./Meowers"
import { receiveMeows, addMeow, savePollMeow } from "./Polls"
import { setAuthorizedMeower } from "./AuthorizedMeower"

let AUTHORIZED_ID = localStorage.getItem("meowedInMeower")
if (AUTHORIZED_ID === "null") {
  AUTHORIZED_ID = null
}

export function handleInitialData() {
  return function (dispatch) {
    return Promise.all([_getMeowers(), _getPolls()])
      .then(function (values) {
        dispatch(receiveMeowers(values[0]))
        dispatch(receiveMeows(values[1]))
        dispatch(setAuthorizedMeower(AUTHORIZED_ID))
      })
  }
}

export function handleCreatePoll(firstOption, secondOption) {
  return function (dispatch, getState) {
    const { AuthorizedMeower } = getState()

    return _savePoll({
      meower: AuthorizedMeower, firstOption, secondOption,
    })
      .then(function (meow) {
        dispatch(addMeow(meow))
        dispatch(addPollToAuthorizedMeower(AuthorizedMeower, meow.id))
      })
  }
}

export function handleStorePollMeow(id, pollMeow) {
  return function (dispatch, getState) {
    const { AuthorizedMeower } = getState()

    return _savePollMeow({
      AuthorizedMeower, poll_ID: id, pollMeow,
    })
      .then(dispatch(savePollMeow(id, pollMeow, AuthorizedMeower)))
      .then(dispatch(savePollMeowToAuthorizedMeower(AuthorizedMeower, id, pollMeow)))
  }
}