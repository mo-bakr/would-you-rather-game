import { combineReducers } from "redux"
import meowerPolls from "./Polls"
import meowers from "./Meowers"
import AuthorizedMeower from "./AuthorizedMeower"

export default combineReducers({
  AuthorizedMeower, meowers, meowerPolls,
})