import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editProfile } from '../actions/index'

const InputProfile = ({
  profile, dispatchEditProfile, setEdit,
}) => {
  const [uri, setUri] = useState(profile.image)
  const [text, setText] = useState(profile.description)

  const handleSubmit = () => {
    dispatchEditProfile(uri, text)
    setEdit(false)
  }
  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor="imgURI" className="form-label">Image</label>
        <input className="form-control" type="text" id="imgURI" value={uri} onChange={e => setUri(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="descr" className="form-label">Description</label>
        <input className="form-control" type="text" id="descr" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <button className="btn btn-success me-1" type="button" onClick={() => handleSubmit()}>Save</button>
        <button className="btn btn-secondary ms-1" type="button" onClick={() => setEdit(false)}>Cancel</button>
      </div>
    </>
  )
}

const mapStateToProps = state => ({ profile: state.profile })

const mapDispatchToProps = dispatch => ({
  dispatchEditProfile: (uri, text) => dispatch(editProfile(uri, text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputProfile)
