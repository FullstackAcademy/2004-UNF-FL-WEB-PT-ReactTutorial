import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from './Main'
import Header from './Header'

import './styles.css'

function App() {
  return <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>
}

export default App