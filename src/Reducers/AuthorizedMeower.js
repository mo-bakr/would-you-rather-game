import { SET_AUTHORIZED_MEOWER } from "../Actions/ActionTypes"

export default function authorizedMeower(state = null, action) {
  switch (action.type) {
    case SET_AUTHORIZED_MEOWER:
      return action.id
    default:
      return state
  }
}