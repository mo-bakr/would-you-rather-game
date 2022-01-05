import {
  RECEIVE_MEOWS, ADD_MEOW, SAVE_POLL_MEOW
} from "../Actions/ActionTypes"

function meowerPolls(state = {}, action) {
  const { type, meow, id, pollMeow, AuthorizedMeower } = action
  if (type === RECEIVE_MEOWS) {
    return {
      ...state, ...action.meows
    }
  }

  else if (type === ADD_MEOW) {
    return {
      ...state, [meow.id]: meow,
    }
  }

  else if (type === SAVE_POLL_MEOW) {
    return {
      ...state, [id]:
      {
        ...state[id], [pollMeow]:
        {
          ...state[id][pollMeow], meows: state[id][pollMeow].meows.concat(AuthorizedMeower)
        }
      }
    }
  }

  else {
    return state
  }
}

export default meowerPolls