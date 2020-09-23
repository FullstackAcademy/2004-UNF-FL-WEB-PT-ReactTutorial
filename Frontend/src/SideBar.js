import React from 'react'
import { Link } from 'react-router-dom';

function SideBar(props) {
  return <div className="side-bar">
    <div className="side-bar-link">
      <Link to='/'>
        Links
      </Link>
    </div>
    <div className="side-bar-link">
      <Link to='/create'>
        Create Link
      </Link>
    </div>
  </div>

}

export default SideBar