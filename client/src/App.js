import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Neighborhoods from './components/Neighborhoods'
import Nav from './components/Nav'
import Restaurants from './components/Restaurants'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/neighborhoods" element={<Neighborhoods />} />
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
