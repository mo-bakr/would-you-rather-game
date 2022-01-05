import {
  RECEIVE_MEOWERS, ADD_MEOW_TO_AUTHORIZED_MEOWER, SAVE_POLL_MEOW_TO_AUTHORIZED_MEOWER,
}
  from "./ActionTypes"

export function receiveMeowers(meowers) {
  return {
    type: RECEIVE_MEOWERS, meowers,
  }
}

export function addPollToAuthorizedMeower(AuthorizedMeower, id) {
  return {
    type: ADD_MEOW_TO_AUTHORIZED_MEOWER, AuthorizedMeower, id,
  }
}

export function savePollMeowToAuthorizedMeower(AuthorizedMeower, id, meowerPollMeow) {
  return {
    type: SAVE_POLL_MEOW_TO_AUTHORIZED_MEOWER, AuthorizedMeower, id, meowerPollMeow,
  }
}