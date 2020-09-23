import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { createLink } from '../../repositories/links'

import './styles.css'

export default function CreateLink(props) {
  const history = useHistory()

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  const onInputChange = (onChange) => ({ target }) => {
    onChange(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    createLink({ name, url })

    history.push('/')
  }


  return <div className="create-link">
    <div className="create-link-content">
      <div>
        <h2>Create a New Link</h2>
      </div>

      <div>
        <form className="create-link-form" onSubmit={onSubmit}>
          <input 
            placeholder="link url" 
            type="text"
            value={url}
            onChange={onInputChange(setUrl)}
          />
          <input 
            placeholder="name" 
            type="text"
            value={name}
            onChange={onInputChange(setName)}
          />
          <input type="submit"/>
        </form>

      </div>
    </div>
  </div>
}