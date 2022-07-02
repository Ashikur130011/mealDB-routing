import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Meals from './component/Meals';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Meals/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
