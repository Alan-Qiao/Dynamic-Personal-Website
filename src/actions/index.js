export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_PROFILE = 'EDIT_PROFILE'

let cid = 0

export const addPost = (title, image, description) => ({
  type: ADD_POST,
  title,
  image,
  description,
  id: cid++,
})

export const updatePost = (id, title, image, description) => ({
  type: UPDATE_POST,
  id,
  title,
  image,
  description,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})

export const editProfile = (image, description) => ({
  type: EDIT_PROFILE,
  image,
  description,
})
