import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import Menu from './components/Menu';
import './App.css';
import FoodDetails from './components/FoodDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="background"></div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/food" element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
