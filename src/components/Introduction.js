import React, { useState } from 'react'
import InputProfile from './InputProfile'
import DisplayProfile from './DisplayProfile'

const Introduction = () => {
  const [edit, setEdit] = useState(false)

  return (
    <div className="row bg-light">
      <div className="pt-5 row justify-content-between">
        <div className="col-8">
          <h1>Hey this is me!</h1>
        </div>
        <div className="col-2">
          <button className="btn btn-warning float-end" type="button" onClick={() => setEdit(true)} visibility={edit ? 'hidden' : 'visible'}>Edit</button>
        </div>
      </div>
      { edit ? <InputProfile setEdit={setEdit} /> : <DisplayProfile />}
    </div>
  )
}

export default Introduction
