import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Lottery from './pages/Lottery'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className='route_wrapper'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/lottery' element={<Lottery />} />
        </Routes>
      </div>
    </>
  )
}

export default App
