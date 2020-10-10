import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Loading from './Components/Loading'
import Page from './Components/Page'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])
  return <Router>{loading ? <Loading /> : <Page />}</Router>
}

export default App
