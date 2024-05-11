import './App.css';
import JSConfetti from 'js-confetti';
import { Route, Routes } from 'react-router-dom';

export const conteffi = new JSConfetti();

import Header from './components/Header';
import About from './pages/About';
import Lottery from './pages/Lottery';
import NotFound from './pages/NotFound';
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
