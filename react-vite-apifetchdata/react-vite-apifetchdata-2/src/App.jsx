import React, { useEffect } from 'react'
import './App.css'
import { getPost } from './api/PostApi'
import Posts from './components/Posts'

function App() {


  

  return (
    <>
    <section className="main-section">
     <Posts/>
    </section>
    </>
  )
}

export default App
