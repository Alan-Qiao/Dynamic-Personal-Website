import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addPost, updatePost } from '../actions'

const InputPost = ({
  option, id, title, image, description, dispatchUpdatePost, dispatchAddPost, setEdit,
}) => {
  const [article, setArticle] = useState(title || '')
  const [uri, setUri] = useState(image || '')
  const [text, setText] = useState(description || '')

  const handleSubmit = () => {
    switch (option) {
      case 'new':
        dispatchAddPost(article, uri, text)
        break
      case 'edit':
        dispatchUpdatePost(id, article, uri, text)
        break
      default:
        throw new Error('Unhandled Action')
    }
    setEdit(false)
  }

  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor="postTitle" className="form-label">Title</label>
        <input className="form-control" type="text" id="postTitle" value={article} onChange={e => setArticle(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="imgURI" className="form-label">Image</label>
        <input className="form-control" type="text" id="imgURI" value={uri} onChange={e => setUri(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="descr" className="form-label">Description</label>
        <input className="form-control" type="text" id="descr" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <button className="btn btn-success me-1" data-bs-dismiss="modal" data-bs-target="#newPost" type="button" onClick={() => handleSubmit()}>Save</button>
        <button className="btn btn-secondary ms-1" data-bs-dismiss="modal" data-bs-target="#newPost" type="button" onClick={() => setEdit(false)}>Cancel</button>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchUpdatePost: (id, article, uri, text) => dispatch(updatePost(id, article, uri, text)),
  dispatchAddPost: (article, uri, text) => dispatch(addPost(article, uri, text)),
})

export default connect(null, mapDispatchToProps)(InputPost)
