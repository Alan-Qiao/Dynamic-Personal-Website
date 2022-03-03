import { EDIT_PROFILE } from '../actions'

const default_state = { image: '', description: '' }

const profile = (state = default_state, action) => {
  const { type, image, description } = action

  switch (type) {
    case EDIT_PROFILE:
      return { ...state, image, description }
    default:
      return state
  }
}

export default profile
