import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import RecipesPage from './components/Recipes'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipes" element={<RecipesPage/>} />
      </Routes>
    </Router>
  )
}

export default App
