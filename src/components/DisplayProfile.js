import React from 'react'
import { connect } from 'react-redux'

const DisplayProfile = ({ profile }) => (
  <div className="card border-light bg-light mb-3" style={{ maxHeight: '400px' }}>
    <div className="row g-1 ms-3">
      <div className="col-md-4">
        <img src={profile.image} className="img-fluid rounded-start" alt="profile image" style={{ maxHeight: '400px' }} hidden={!profile.image} />
      </div>
      <div className="col-md-8 text-center">
        <div className="card-body">
          <h3 className="card-text">{profile.description}</h3>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({ profile: state.profile })

export default connect(mapStateToProps, null)(DisplayProfile)
