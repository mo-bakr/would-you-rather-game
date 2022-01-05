import {
  RECEIVE_MEOWERS, ADD_MEOW_TO_AUTHORIZED_MEOWER, SAVE_POLL_MEOW_TO_AUTHORIZED_MEOWER
} from "../Actions/ActionTypes"

function meowers(state = {}, action) {
  if (action.type === RECEIVE_MEOWERS) {
    return {
      ...state,
      ...action.meowers
    }
  }

  else if (action.type === ADD_MEOW_TO_AUTHORIZED_MEOWER) {
    const { AuthorizedMeower, id } = action
    return {
      ...state,
      [AuthorizedMeower]:
      {
        ...state[AuthorizedMeower], meowerPolls: state[AuthorizedMeower].meowerPolls.concat(id)
      }
    }
  }

  else if (action.type === SAVE_POLL_MEOW_TO_AUTHORIZED_MEOWER) {
    const { meowerPollMeow } = action
    return {
      ...state,
      [action.AuthorizedMeower]:
      {
        ...state[action.AuthorizedMeower], meows:
        {
          ...state[action.AuthorizedMeower].meows, [action.id]: meowerPollMeow,
        }
      }
    }
  }

  else {
    return state
  }
}


export default meowers