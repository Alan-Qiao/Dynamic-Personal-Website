import React, { useState } from 'react'
import { connect } from 'react-redux'

import InputPost from './InputPost'
import { deletePost } from '../actions'

const Post = ({
  id, title, image, description, dispatchDeletePost,
}) => {
  const [edit, setEdit] = useState(false)

  const handleDelete = () => {
    dispatchDeletePost(id)
    setEdit(false)
  }

  if (edit) {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <InputPost option="edit" id={id} title={title} image={image} description={description} setEdit={setEdit} />
            <div className="d-grid">
              <button type="button" className="btn btn-danger" onClick={() => handleDelete()}>DELETE POST</button>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt={`blog post ${id} image`} />
        <div className="card-body">
          <h5 className="card-title">
            Post #
            {id}
            :
            {' '}
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <button type="button" className="btn btn-warning" onClick={() => setEdit(true)}>Edit Post</button>
        </div>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({ dispatchDeletePost: id => dispatch(deletePost(id)) })

export default connect(null, mapDispatchToProps)(Post)
