import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Meals from './component/Meals';
import Details from './component/Details/Details';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Meals/>}/>
          <Route path='/meals' element={<Meals/>}/>
          <Route path='details/:mealId' element={<Details/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
