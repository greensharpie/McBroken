import { Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Home from './components/Home'
import Neighborhoods from './components/Neighborhoods'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/neigborhoods" element={<Neighborhoods />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
