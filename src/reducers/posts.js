import { ADD_POST, UPDATE_POST, DELETE_POST } from '../actions/index'

const default_state = []

const posts = (state = default_state, action) => {
  const {
    type, title, image, description, id,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        id, title, image, description,
      }]
    case UPDATE_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            ...post, title, image, description,
          }
        }
        return { ...post }
      })
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default posts
