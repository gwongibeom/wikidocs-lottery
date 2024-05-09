import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Lottery from './pages/Lottery';

function App() {
  return (
    <>
      <Header />
      <div className='route_wrapper'>
        <Routes>
          <Route path='/' element={<Lottery />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
