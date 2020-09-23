import React from 'react'
import SideBar from './SideBar'
import Content from './Content'


function Main(props) {
  return (
    <div className='main-links'>
      <SideBar />
      <Content />
    </div>
  )

}

export default Main