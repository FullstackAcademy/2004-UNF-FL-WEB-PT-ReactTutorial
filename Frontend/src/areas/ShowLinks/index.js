import React, { useEffect, useState } from 'react'
import Link from './Link'
import { getLinks, deleteLink as deleteLinkBro } from '../../repositories/links'

import './styles.css'

function ShowLinks(props) {
  const [links, setLinks] = useState([])

  const deleteLink = (id) => (e) => {
    e.preventDefault()

    const updatedLinks = links.filter((l) => l.id !== id)
    setLinks(updatedLinks)

    deleteLinkBro(id).catch(err => {
      console.error(err)
      alert(err.message)
    })
  }

  useEffect(() => {
    const responseFromAxios = getLinks()

    responseFromAxios.then(response => {
      console.log(response)
      setLinks(response)
    })
  }, [])

  return <div>
    <h2>Displays your Links</h2>
    <div className="link-content">
      { links.map(({ name, url, id }) => <Link id={id} name={name} url={url} onDelete={deleteLink(id)} />) }
    </div>
  </div>
}

export default ShowLinks