import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import Slider from './components/Menu';
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <div className='background'></div>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/menu' element={<Slider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
