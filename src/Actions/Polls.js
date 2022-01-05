import {
  RECEIVE_MEOWS, ADD_MEOW, SAVE_POLL_MEOW,
}
  from "./ActionTypes"

export function receiveMeows(meows) {
  return {
    type: RECEIVE_MEOWS, meows,
  }
}

export function addMeow(meow) {
  return {
    type: ADD_MEOW, meow,
  }
}

export function savePollMeow(id, pollMeow, AuthorizedMeower) {
  return {
    type: SAVE_POLL_MEOW, id, pollMeow, AuthorizedMeower,
  }
}