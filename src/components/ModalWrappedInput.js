import React from 'react'

import InputPost from './InputPost'

const ModalWrappedInput = ({ setEdit }) => (
  <div className="modal fade" id="newPost" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">New Post</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" data-bs-target="#newPost" onClick={() => setEdit(false)} aria-label="Close" />
        </div>
        <div className="modal-body">
          <InputPost option="new" setEdit={setEdit} />
        </div>
      </div>
    </div>
  </div>
)

export default ModalWrappedInput
