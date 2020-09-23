import React from 'react'

function Link({ id, name, url, onDelete }) {
  return <div key={id} className="link">
    <h4>{name}</h4>
    <a href={url} target="_blank">Click Me</a>
    <button onClick={onDelete}>Delete Me</button>
  </div>
}

export default Link