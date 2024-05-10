import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Lottery from './pages/Lottery';
import Result from './pages/Result';

function App() {
  return (
    <>
      <Header />
      <div className='route_wrapper'>
        <Routes>
          <Route path='/' element={<Lottery />} />
          <Route path='/about' element={<About />} />
          <Route path='/result/:paraResult' element={<Result />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
