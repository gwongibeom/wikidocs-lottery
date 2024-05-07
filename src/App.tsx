import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Lottery from './pages/Lottery'

function App() {
  return (
    <>
      <h1>네브</h1>
      <NavLink to={'/about'}>어바웃</NavLink>
      <NavLink to={'/lottery'}>추첨</NavLink>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/lottery' element={<Lottery />} />
      </Routes>
    </>
  )
}

export default App
