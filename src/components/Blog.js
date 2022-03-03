import React, { useState } from 'react'
import { connect } from 'react-redux'

import Post from './Post'
import ModalWrappedInput from './ModalWrappedInput'

const Blog = ({ posts }) => {
  const [edit, setEdit] = useState(false)

  return (
    <div className="row mt-3">
      <div className="row justify-content-between">
        <div className="col-8">
          <h1 style={{ color: '#3cb4b2' }}>Blog Posts</h1>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#newPost" onClick={() => setEdit(true)}>Add Post</button>
        </div>
      </div>
      <div className="row row-cols-3">
        {posts.map(post => <Post key={post.id} id={post.id} title={post.title} image={post.image} description={post.description} />)}
      </div>
      <ModalWrappedInput setEdit={setEdit} />
    </div>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(Blog)
