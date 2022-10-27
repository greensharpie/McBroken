import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Neighborhoods from './components/Neighborhoods'
import Nav from './components/Nav'
import Restaurants from './components/Restaurants'
import Restaurant from './components/Restaurant'
import Hood from './components/Hood'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neighborhoods" element={<Neighborhoods />} />
          <Route path="/neighborhoods/:id" element={<Hood />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<Restaurant />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
