import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
