import { SET_AUTHORIZED_MEOWER } from "./ActionTypes"

export function setAuthorizedMeower(id) {
  localStorage.setItem("meowedInMeower", id)
  return {
    type: SET_AUTHORIZED_MEOWER, id
  }
}